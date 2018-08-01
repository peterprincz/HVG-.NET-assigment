using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public class SavingsAccount : Account
    {

        decimal interestRate;

        public SavingsAccount(string decimal interestRate)
        {
            this.interestRate = interestRate;
        }

        public override bool isAmountWithdrawable()
        {
            throw new NotImplementedException();
        }

        public override void uploadMoney()
        {
            throw new NotImplementedException();
        }

        public override void withDraw(decimal amount)
        {
            throw new NotImplementedException();
        }
    }
}
