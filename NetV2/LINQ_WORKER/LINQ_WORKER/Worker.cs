using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading;
using System.IO;

namespace linqk_worker
{
    class Worker
    {

        public void work()
        {
            var listOfInt = new List<int> { 2, 7, 3, 13, 5, 18, 16 };
            var smallerNumbers = from num in listOfInt where num < 8 select num;

            //LAMDA

            var smallerNumbers2 = listOfInt.Where(n => n < 8).Select(n => n);

            foreach (int number in smallerNumbers)
            {
                Console.WriteLine("Value:" + number);
            }


            foreach (int number in smallerNumbers2)
            {
                Console.WriteLine("Value:" + number);
            }

            var methods = from method in typeof(int).GetMethods()
                          orderby method.Name
                          group method by method.Name
                          into groups
                          select new
                          {
                              MethodName = groups.Key,
                              MethodOverloads = groups.Count()
                          };

            foreach (var inten in methods)
            {
                Console.WriteLine(inten);
            }
/*
            var millon = Enumerable.Range(0, 1000000).Select(x =>
            {
                Thread.Sleep(500);
                return x * x;
            });

            foreach (var number in millon)
            {
                Console.WriteLine(number + " ");
            }
*/
            Console.WriteLine();

        }
            public void ShowLargeFilesWithLinq()
            {
                string path = @"C:\windows";
                var query = new DirectoryInfo(path).GetFiles().OrderByDescending(f => f.Length).Take(5);
                foreach(var file in query)
                {
                    Console.WriteLine($"{file.Name} : {file.Length}");
                }

            var query2 = new DirectoryInfo(path).GetFiles().OrderBy(f => f.Length).Take(5);

            foreach (var file in query2)
            {
                Console.WriteLine($"{file.Name} : {file.Length}");
            }
        }

           //private static void ShowLargeFilesWithoutLinq(string path)
           // {

           // }


        

        

    }
}
