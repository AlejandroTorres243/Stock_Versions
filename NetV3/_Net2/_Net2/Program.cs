using System;

namespace _Net2
{
    class Program
    {
        static void Main(string[] args)
        {
            int Luis, Maria, Juan, Silvia;

            Console.Write("Edad de Luis: ");
            Luis = Int32.Parse(Console.ReadLine());//65;
            Console.Write("Edad de Maria: ");
            Maria = Int32.Parse(Console.ReadLine());//28;
            Console.Write("Edad de Juan: ");
            Juan = Int32.Parse(Console.ReadLine());//15;
            Console.Write("Edad de Silvia: ");
            Silvia = Int32.Parse(Console.ReadLine());//70;

            if ((Luis >= 18) && (Luis >= 60 ))
                Console.WriteLine("Luis puede votar y es Jubilado");
            else
                Console.WriteLine("Luis no es Jubilado y no puede votar");
            if ((Maria >= 18) && (Maria >= 60))
                Console.WriteLine("Maria puede votar y es Jubilado");
            else
                Console.WriteLine("Maria no es Jubilado y no puede votar");
            if ((Juan >= 18) && (Juan >= 60))
                Console.WriteLine("Juan puede votar y es Jubilado");
            else
                Console.WriteLine("Juan no es Jubilado y no puede votar");
            if ((Silvia >= 18) && (Silvia >= 60))
                Console.WriteLine("Silvia puede votar y es Jubilado");
            else
                Console.WriteLine("Silvia no es Jubilado y no puede votar");
        }
    }
}
