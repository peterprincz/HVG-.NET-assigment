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

        public void saveAccount(Account account)
        {
            memrepo.addAbstractAccount(account);
            memrepo.SaveChanges();
        }

        public Account createNewAccount(String type, String ownerName)
        {
            if(!type.Equals("deposit") && !type.Equals("savings"))
            {
                throw new ArgumentException("Invalid Account type");
            }
            if (type.Equals("deposit"))
            {
                DepositAccount account = new DepositAccount("01234-567", ownerName, 0, "HUF", 50000);
                memrepo.deposticAccounts.Add(account);
                memrepo.SaveChanges();
                return account;
            }
            else
            {
                SavingsAccount account = new SavingsAccount("123-213-132", ownerName, 0, "HUF", 5);
                memrepo.savingsAccounts.Add(account);
                memrepo.SaveChanges();
                return account;
            }
        }

        public Account getAccountById(Int32 id)
        {
            return memrepo.findAbstractAccountById(id);
        }

        public List<SavingsAccount> getAllSavingsAccounts()
        {
            return new List<SavingsAccount>(memrepo.savingsAccounts);
        }

        public List<DepositAccount> getAllDepositAccounts()
        {
            return new List<DepositAccount>(memrepo.deposticAccounts);
        }

        public List<Account> getAllAccount()
        {
            List<Account> allAccounts = new List<Account>();
            allAccounts.AddRange(memrepo.deposticAccounts);
            allAccounts.AddRange(memrepo.savingsAccounts);
            return allAccounts;

        }


    }
}

