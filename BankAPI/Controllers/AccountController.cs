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
            Account account = accountService.createNewAccount(jsonMap["type"], jsonMap["name"]);
            return new OkObjectResult(account);
        }

        [HttpGet("id/{id}")]
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
        public void Delete(int id)
        {
        }
    }
}
