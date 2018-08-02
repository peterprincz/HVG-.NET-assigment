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

        public Account createNewAccount(String type, String ownerName, String currency)
        {
            if (!(type.Equals("deposit") || type.Equals("savings")))
            {
                throw new ArgumentException("Invalid Account type");
            }
            if (ownerName.Length < 4|| !ownerName.Contains(" "))
            {
                throw new ArgumentException("Invalid Account type");
            }
            if (type.Equals("deposit"))
            {
                DepositAccount account = new DepositAccount(ownerName,currency);
                memrepo.deposticAccounts.Add(account);
                memrepo.SaveChanges();
                return account;
            }
            else
            {
                SavingsAccount account = new SavingsAccount(ownerName, currency);
                memrepo.savingsAccounts.Add(account);
                memrepo.SaveChanges();
                return account;
            }
        }

        public Account getAccountById(Int32 id)
        {
            return memrepo.findAbstractAccountById(id);
        }

        public List<Account> getAllAccount()
        {
            List<Account> allAccounts = new List<Account>();
            allAccounts.AddRange(memrepo.deposticAccounts);
            allAccounts.AddRange(memrepo.savingsAccounts);
            return allAccounts;
        }

        public void deleteAccount(Account account)
        {
            memrepo.Remove(account);
        }

        public bool canWithDrawAmount(Account account, decimal amount)
        {
            return account.isAmountWithdrawable(amount);
        }

        public Account withDrawAmount(Account account, decimal amount)
        {
            account.withDraw(amount);
            memrepo.SaveChanges();
            return account;
        }

        public Account uploadAmount(Account account, decimal amount)
        {
            account.uploadMoney(amount);
            memrepo.SaveChanges();
            return account;
        }

        public void transferMoney(Account senderAccount, Account receiverAccount, decimal amount)
        {
            if (!senderAccount.isAmountWithdrawable(amount)) {
                throw new ArgumentException("insufficient funds");
            }
            receiverAccount.uploadMoney(amount);
            senderAccount.withDraw(amount);
            memrepo.SaveChanges();
        }



    }
}

