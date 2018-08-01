using BankAPI.Models;
using BankAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Services
{
    public class AccountService
    {
        MemRepo memrepo;

        public AccountService(MemRepo memrepo)
        {
            this.memrepo = memrepo;
        }

        public SavingsAccount CreateSavingsAccount(string accountNumber, string owner, decimal balance, string currency, decimal interestRate)
        {
            SavingsAccount account = new SavingsAccount(accountNumber, owner, balance, currency, interestRate);
            memrepo.savingsAccounts.Add(account);
            memrepo.SaveChanges();
            return account;
        }

        public DepositAccount CreateDepositAccount(string accountNumber, string owner, decimal balance, string currency, decimal interestRate)
        {
            DepositAccount account = new DepositAccount(accountNumber, owner, balance, currency, interestRate);
            memrepo.deposticAccounts.Add(account);
            memrepo.SaveChanges();
            return account;
        }

        public SavingsAccount getSavingsAccountById(Int32 id)
        {
            return memrepo.savingsAccounts.Find(id);
        }

        public DepositAccount getDepositById(Int32 id)
        {
            return memrepo.deposticAccounts.Find(id);
        }

        public List<SavingsAccount> getAllSavingsAccounts()
        {
            return new List<SavingsAccount>(memrepo.savingsAccounts);
        }

        public List<DepositAccount> getAllDepositAccounts()
        {
            return new List<DepositAccount>(memrepo.deposticAccounts);
        }



    }
}

