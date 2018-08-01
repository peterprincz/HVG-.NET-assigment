﻿using System;
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

        [Key]
        public Int32 id {get; set; }

        public string accountNumber { get; private set; }

        public string owner { get; set; }

        public decimal balance { get; set; }

        public string currency { get; set; }

        public abstract bool isAmountWithdrawable(decimal amount);
        public abstract void uploadMoney(decimal amount);
        public abstract void withDraw(decimal amount);

        protected Account(string accountNumber, string owner, decimal balance, string currency)
        {
            id = idCounter;
            idCounter++;
            this.accountNumber = accountNumber;
            this.owner = owner;
            this.balance = balance;
            this.currency = currency;
        }

        protected Account() { }
    }
}
