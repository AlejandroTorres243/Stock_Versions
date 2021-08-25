using System;
using System.Collections.Generic;
using System.Text;

namespace interfaz
{
    class Clase
    {
        List<Clase2> lista;
        public Clase()
        {

            List<Clase2> lista = new List<Clase2>();

            string entrada;
            //int op = -1;

            ////while (op != 0)
            //{

                Console.WriteLine("Introduce un dato:");
                entrada = Console.ReadLine();

                Clase2 dato = new Clase2 { valor = entrada, valor2 = entrada };

                lista.Add(dato);
            
            //    Console.WriteLine("Desea continuar: ");
            //    op = Int32.Parse(Console.ReadLine());

            //}

            //foreach (Clase2 lectura in lista)
            //{
            //    Console.WriteLine(lectura.valor);
            //}

        }

        public void ListaA()
        {
            foreach (Clase2 lectura in lista)
            {
                Console.WriteLine(lectura.valor);
            }
        }


    }
}
