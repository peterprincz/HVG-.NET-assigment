using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public class SavingsAccount : Account, IAccount
    {

        public decimal interestRate;

        public SavingsAccount(string accountNumber, string owner, decimal balance, string currency, decimal interestRate)
            :base(accountNumber, owner, balance, currency)
        {
            this.interestRate = interestRate;
        }


        public override bool isAmountWithdrawable(decimal amount)
        {
            if(amount <= 0)
            {
                throw new ArgumentException("Negative money was passed");
            }
            return balance >= amount; 
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
