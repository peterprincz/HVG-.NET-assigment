using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankAPI.Models;
using BankAPI.Repositories;
using BankAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace BankAPI.Controllers
{
    [Route("api/")]
    public class AccountController : ControllerBase
    {

        private readonly MemRepo memrepo;
        AccountService accountService;
        CurrencyService currencyService;

        public AccountController(MemRepo memrepo)
        {
            this.memrepo = memrepo;
            accountService = new AccountService(this.memrepo);
            currencyService = new CurrencyService();
        }

        [HttpGet]
        public IActionResult getAllCreditCard()
        {
            return new OkObjectResult(accountService.getAllAccount());
        }

        [HttpPost]
        public IActionResult createAccount([FromBody]Dictionary<String, String> jsonMap)
        {
            try {
                string type = jsonMap["type"];
                string name = jsonMap["name"];
                string currency = jsonMap["currency"];
                if(name.Length < 4 && !name.Contains(" "))
                {
                    return new BadRequestObjectResult("Invalid name");
                }
                Account account = accountService.createNewAccount(jsonMap["type"], jsonMap["name"], jsonMap["currency"]);
                return new OkObjectResult(account);
            }
            catch (ArgumentException e)
            {
                return new BadRequestObjectResult(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult getAccountById(Int32 id)
        {
            Account account = accountService.getAccountById(id);
            if(account == null)
            {
                return new NotFoundObjectResult("Creditcard was not found with id of" + id);
            }
            return new OkObjectResult(account);
        }

        [HttpDelete("{id}")]
        public IActionResult delete(Int32 id)
        {
            Account account = accountService.getAccountById(id);
            if (account == null)
            {
                return StatusCode(404);
            }
            accountService.deleteAccount(account);
            return StatusCode(404);
        }

        [HttpPut("withdraw")]
        public IActionResult withDrawMoney([FromBody]Dictionary<String, String> jsonMap)
        {
            Account account = accountService.getAccountById(Int32.Parse(jsonMap["id"]));
            decimal amount;
            try { 
                amount = Decimal.Parse(jsonMap["amount"]);
            } catch(FormatException)
            {
                return new BadRequestObjectResult("Invalid request, please provide a valid number to withdraw");
            }
            if(account == null)
            {
                return StatusCode(404);
            }
            if(amount <= 0)
            {
                return new BadRequestObjectResult("Invalid request, cant withdraw sum lower than 1!");
            }
            if (!accountService.canWithDrawAmount(account, amount) ){
                return new BadRequestObjectResult("That sum is not withDrawable!");
            }
            return new OkObjectResult(accountService.withDrawAmount(account, amount));
        }

        [HttpPut("upload")]
        public IActionResult uploadMoney([FromBody]Dictionary<String, String> jsonMap)
        {
            Account account = accountService.getAccountById(Int32.Parse(jsonMap["id"]));
            decimal amount;
            try
            {
                amount = Decimal.Parse(jsonMap["amount"]);
            }
            catch (FormatException)
            {
                return new BadRequestObjectResult("Invalid request, please provide a valid number to withdraw");
            }
            if (account == null)
            {
                return StatusCode(404);
            }
            if (amount <= 0)
            {
                return new BadRequestObjectResult("Invalid request, cant withdraw sum lower than 1!");
            }
            return new OkObjectResult(accountService.uploadAmount(account, amount));
        }

        [HttpPost("transfer")]
        public async Task<IActionResult> transferMoney([FromBody]Dictionary<String, String> jsonMap)
        {
            Account senderAccount = accountService.getAccountById(Int32.Parse(jsonMap["senderId"]));
            Account receiverAccount = accountService.getAccountById(Int32.Parse(jsonMap["receiverId"]));
            decimal amount;
            try
            {
                amount = Decimal.Parse(jsonMap["amount"]);
            }
            catch (FormatException)
            {
                return new BadRequestObjectResult("Invalid request, please provide a valid number to transfer");
            }
            if (amount <= 0)
            {
                return new BadRequestObjectResult("Invalid request, cant withdraw sum lower than 1!");
            }
            if (senderAccount == null || receiverAccount == null)
            {
                return StatusCode(404);
            }
            if (!senderAccount.isAmountWithdrawable(amount))
            {
                return new BadRequestObjectResult("Sender has insufficient funds!");
            }
            try { 
                decimal moneyExchaned = await currencyService.exChange(100m, receiverAccount.currency, senderAccount.currency);
            }
            catch (KeyNotFoundException)
            {
                return new BadRequestObjectResult("Unkown currency!");
            }
            accountService.transferMoney(senderAccount, receiverAccount, amount);
            return new OkResult();
        }

    }
}
