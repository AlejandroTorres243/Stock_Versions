using linqk_worker;
using System;

namespace LINQ_WORKER
{
    class Program
    {
        static void Main(string[] args)
        {

            Worker linq = new Worker();

            linq.work();

            linq.ShowLargeFilesWithLinq();

        }
    }
}
