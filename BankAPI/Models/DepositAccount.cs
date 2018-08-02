using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public class DepositAccount : Account, IAccount
    {
        public decimal creditLimit { get; set; } = 50000;

        public DepositAccount() {
            TYPE = "deposit";
        }

        public DepositAccount(string owner, string currency)
            : base(owner, currency)
        {
            TYPE = "deposit";
        }

        public override bool isAmountWithdrawable(decimal amount)
        {
            if (amount < 0)
            {
                throw new ArgumentException("Negative money was passed");
            }
            return balance + creditLimit >= amount;
        }

        public override void uploadMoney(decimal amount)
        {
            if (amount < 0)
            {
                throw new ArgumentException("Negative money was passed");
            }
            balance += amount;
        }

        public override void withDraw(decimal amount)
        {
            if (amount < 0)
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