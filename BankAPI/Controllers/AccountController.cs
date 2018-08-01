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
    [Route("account/")]
    public class AccountController : ControllerBase
    {

        private readonly MemRepo memrepo;
        AccountService accountService;

        public AccountController(MemRepo memrepo)
        {
            this.memrepo = memrepo;
            accountService = new AccountService(this.memrepo);
        }

        [HttpGet]
        public IActionResult getAllCreditCard()
        {
            return new OkObjectResult(accountService.getAllAccount());
        }

        [HttpGet("{type}")]
        public IActionResult GetAllCreditcardOfType(string type)
        {
            if (type.Equals("deposit"))
            {
                return new OkObjectResult(accountService.getAllDepositAccounts());
            }
            if (type.Equals("savings"))
            {
                return new OkObjectResult(accountService.getAllSavingsAccounts());
            }
            return new BadRequestObjectResult("there is no Account with type of " + type);
        }

        [HttpPost]
        public IActionResult createAccount([FromBody]Dictionary<String, String> jsonMap)
        {
            Account account = accountService.createNewAccount(jsonMap["type"], jsonMap["name"], jsonMap["currency"]);
            return new OkObjectResult(account);
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
            Int32 accountId = Int32.Parse(jsonMap["id"]);
            decimal amount = Decimal.Parse(jsonMap["amount"]);
            Account account = accountService.getAccountById(accountId);
            if(account == null)
            {
                return StatusCode(404);
            }
            if(amount <= 0)
            {
                return new BadRequestObjectResult("Invalid money amount");
            }
            if (!accountService.canWithDrawAmount(account, amount) ){
                return new BadRequestObjectResult("Can't withdraw that amount");
            }
            return new OkObjectResult(accountService.withDrawAmount(account, amount));
        }

        [HttpPut("upload")]
        public IActionResult uploadMoney([FromBody]Dictionary<String, String> jsonMap)
        {
            Int32 accountId = Int32.Parse(jsonMap["id"]);
            decimal amount = Decimal.Parse(jsonMap["amount"]);
            Account account = accountService.getAccountById(accountId);
            if (account == null)
            {
                return StatusCode(404);
            }
            if (amount <= 0)
            {
                return new BadRequestObjectResult("Invalid money amount");
            }
            return new OkObjectResult(accountService.uploadAmount(account, amount));
        }

    }
}
