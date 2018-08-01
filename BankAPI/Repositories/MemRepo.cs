using BankAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Repositories
{
    public class MemRepo : DbContext
    {

        public MemRepo(DbContextOptions<MemRepo> options)
            : base(options){}

        public DbSet<SavingsAccount> savingsAccounts { get; set; }

        public DbSet<DepositAccount> deposticAccounts { get; set; }

        public void addAbstractAccount(Account account) {
            if(account is SavingsAccount)
            {
                savingsAccounts.Add((SavingsAccount)account);
                return;
            }
            if(account is DepositAccount)
            {
                deposticAccounts.Add((DepositAccount)account);
                return;
            }
            throw new ArgumentException("Account is neither Savings or Deposit Account");
        }

        public Account findAbstractAccountById(Int32 id)
        {
            Account account;
            if (savingsAccounts.Find(id) != null)
            {
                account = savingsAccounts.Find(id);
            }
            else
            {
                account = deposticAccounts.Find(id);
            }
            return account;
        }

    }
}
