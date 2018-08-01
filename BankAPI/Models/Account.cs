using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public abstract class Account: IAccount
    {

        public Int32 id {get; private set; }

        public string accountNumber { get; private set; }

        public string owner { get; set; }

        public decimal balance { get; private set; }

        public string currency { get; set; }

        public abstract bool isAmountWithdrawable();
        public abstract void uploadMoney();
        public abstract void withDraw(decimal amount);
    }
}
