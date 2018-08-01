using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public abstract class Account : IAccount
    {

        public string TYPE {get; set;}

        public static Int32 idCounter { get;private set; } = 1;
        public static Int32 accountNumberCounter { get; private set; } = 1000000;

        [Key]
        public Int32 id {get; set; }

        public string accountNumber { get; private set; }

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
            this.accountNumber = "0123-" + accountNumberCounter.ToString() + "354";
            accountNumberCounter++;
            this.owner = owner;
            this.balance = 0;
            this.currency = currency;
        }

        protected Account() { }
    }
}
