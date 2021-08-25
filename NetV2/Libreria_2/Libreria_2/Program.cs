using System;

namespace Libreria_2
{
    class Program
    {
        static void Main(string[] args)
        {

            Documento libro = new Libro();
            libro.paginas = 55;
            libro.CalcularPaginas();
            libro.CalcularPrecio();
            libro.MostrarPrecio();
            Console.Read();

        }

        abstract class Documento
        {

            public int paginas;
            public float precio;

            public abstract void CalcularPrecio();

            public void CalcularPaginas()
            {

                Console.WriteLine("El numero de paginas es " + paginas);

            }

            public void MostrarPrecio()
            {
                Console.WriteLine($"El precio del libro es {precio} ");
            }

        }

        class Libro : Documento
        {
            public override void CalcularPrecio()
            {
                precio = paginas * 0.23f;
            }

        }

    }
}
