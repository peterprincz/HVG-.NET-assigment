using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public abstract class Account : IAccount
    {

        public static Int32 idCounter { get; private set; } = 1;
        public static Int32 accountNumberCounter { get; set; } = 10;

        public static decimal startingBonus = 5000;

        [Key]
        public Int32 id { get; set; }

        public string TYPE {get; set;}
        public string accountNumber { get; set; }
        public string owner { get; set; }
        public decimal balance { get; set; }
        public string currency { get; set; }


        public abstract bool isAmountWithdrawable(decimal amount);
        public abstract void uploadMoney(decimal amount);
        public abstract void withDraw(decimal amount);

        protected Account(string owner, string currency)
        {
            id = idCounter;
            idCounter++;
            accountNumber = "012-" + accountNumberCounter.ToString() + "-354";
            accountNumberCounter += 6191;
            this.owner = owner;
            balance = Account.startingBonus;
            this.currency = currency;
        }

        protected Account() { }
    }
}
