using System;
using System.Collections.Generic;

namespace ConsoleApp5
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> authors = null;
            int? count = authors?.Count;
            string message = count == null ? "count is null" : "no es null";
            Console.WriteLine(message);
        }
    }
}
