using System;

namespace _Net1
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int Edad, Turno;

            Console.Write("Edad:");
            Edad = Int32.Parse(Console.ReadLine());
            Console.Write("Turno:");
            Turno = Int32.Parse(Console.ReadLine());

            if (Turno == 9)
            {
                Console.Write("Luis Rodriguez tiene "+ Edad + " years y entra a las " + Turno + " de la mañana");
            }
            else
            {
                Console.Write("Jose Martinez tiene " + Edad + " years y entra a las " + Turno + " de la mañana");
            }
            */

            int Luis, Maria, Juan, Silvia;

            Luis = 65;
            Maria = 28;
            Juan = 15;
            Silvia = 70;

            if((Luis == 65) && (Maria == 28) && (Juan == 15) && (Silvia == 70)){
                Console.WriteLine("Luis y Silvia son JUBILADOS-Maria y Juan tienen que trabajar");
            }


        }
    }
}
