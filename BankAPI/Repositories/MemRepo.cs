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

    }
}
