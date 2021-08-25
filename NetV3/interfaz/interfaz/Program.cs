using System;
using System.Collections.Generic;

namespace interfaz
{
    class Program
    {
        static void Main(string[] args)
        {

            Clase prueba;
            int op = -1;

            while (op != 0)
            {
                Console.WriteLine("1-Login");
                Console.WriteLine("2-Salida");
                Console.WriteLine("\nOpcion: ");
                op = Int32.Parse(Console.ReadLine());

                if (op == 1)
                    prueba = new Clase();
              
          
                if (op == 0)
                    op = 0;
            }
    
            
        }
    }
}
