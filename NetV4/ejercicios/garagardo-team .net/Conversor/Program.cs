using System;
using System.Collections.Generic;

namespace Conversor
{
    class Program
    {
        static void Main(string[] args)
        {


           try
            {
                Menu Menu = new Menu();
                Menu.Presentacion();
            }
            catch (Exception)
            {

                Console.WriteLine("Error");
            }


            /*          Moneda Euro = new Moneda("Euro", "EUR");
                        Moneda LibraEsterlina = new Moneda("Libra esterlina", "GBP");
                        Moneda Dolares = new Moneda("Dolar", "USD");*/

            /*ConversorInterno.CalculoEuros(PedirMostrar);*/


        }



    }
}
