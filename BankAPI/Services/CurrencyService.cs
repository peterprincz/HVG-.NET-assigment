using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace BankAPI.Services
{
    public class CurrencyService
    {

        public string url = "http://www.apilayer.net/api/live?access_key=0b610cc080b4d1668781ea9e04ea79b4&format=1";


        public async Task<decimal> exChange(decimal amount, String from, String to)
        {
            if (from.Equals(to))
            {
                return amount;
            }
            HttpClient client = new HttpClient();
            ExchangeRateResponse responseData;
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                //The free API only supports USD conversion 
                responseData = await response.Content.ReadAsAsync<ExchangeRateResponse>();
                decimal amountINUSD = amount / responseData.quotes["USD" + from];
                return amountINUSD * responseData.quotes["USD" + to];
            } else
            {
                return 0m;
            }
        }

    }

    public class ExchangeRateResponse
    {
        public bool success;
        public string terms;
        public string privacy;
        public Int32 timestamp;
        public string source;
        public Dictionary<String, decimal> quotes;
    }
}
