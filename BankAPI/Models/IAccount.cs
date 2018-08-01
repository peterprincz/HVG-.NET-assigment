using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    interface IAccount
    {

        bool isAmountWithdrawable();

        void withDraw(decimal amount);

        void uploadMoney();

    }
}
