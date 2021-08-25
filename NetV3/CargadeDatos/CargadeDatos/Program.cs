


using System;

namespace CargadeDatos
{
    class Program
    {
        static void Main(string[] args)
        {
            string dato = Console.ReadLine();
            double convensor = 0;

            if (dato.Contains("."))
                dato = dato.Replace('.', ',');

           

                convensor = double.Parse(dato);

            Console.WriteLine(convensor);



        }
    }
}
