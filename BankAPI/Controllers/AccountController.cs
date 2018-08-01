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

        public AccountController(MemRepo memrepo)
        {
            this.memrepo = memrepo;
            accountService = new AccountService(this.memrepo);
        }

        [HttpGet("get-all")]
        public List<SavingsAccount> GetAll()
        {
            return accountService.getAllSavingsAccounts();
        }

        [HttpPost("new")]
        public SavingsAccount Post()
        {
            return accountService.CreateSavingsAccount("12312", "Péter Princz", 10000, "HUF", 5);
        }

        // PUT api/values/5
        [HttpGet("get/{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
