using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public class DepositAccount : Account, IAccount
    {
        public decimal creditLimit;


        public DepositAccount() {
            this.TYPE = "deposit";
        }

        public DepositAccount(string accountNumber, string owner, decimal balance, string currency, decimal creditLimit)
            : base(accountNumber, owner, balance, currency)
        {
            this.TYPE = "deposit";
            this.creditLimit = creditLimit;
        }


        public override bool isAmountWithdrawable(decimal amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentException("Negative money was passed");
            }
            return balance + creditLimit >= amount;
        }

        public override void uploadMoney(decimal amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentException("Negative money was passed");
            }
            balance += amount;
        }

        public override void withDraw(decimal amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentException("Negative money was passed");
            }
            if (!isAmountWithdrawable(amount))
            {
                throw new ArgumentException(String.Format($"{0} is not drawable from account : {1}", amount.ToString(), accountNumber));
            }
            balance -= amount;
        }
    }



}