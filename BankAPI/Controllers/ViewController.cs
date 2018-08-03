using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BankAPI.Controllers
{
    [Route("")]
    public class ViewController : Controller
    {
        [HttpGet("/index")]
        public IActionResult Index()
        {
            return File("~/hvg-bank-client/index.html", "text/html");
        }
    }
}