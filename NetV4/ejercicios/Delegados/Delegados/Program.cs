using System;

namespace Delegados
{
    class Program
    {
        delegate int Algo(int a, int b);

        static void Main(string[] args)
        {

            int Suma(int a, int b)
            {
                return a + b;
            }

            int Resta(int a, int b)
            {
                return a - b;
            }

            Algo LoQueVamosAHacer = new Algo(Suma); 

            void Haz_Algo(int a, int b) 
            {
                Console.WriteLine("" + LoQueVamosAHacer(1, 2));
            }

            Haz_Algo(1, 2);

        }
    }
}
