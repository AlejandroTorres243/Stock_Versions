using System;

namespace Delegados2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var PonerEnMarcha = new PonerEnMarcha();

            var coche = new Coche();
            var moto = new Moto();

            PonerEnMarcha.FormaDeArrancar arrancarCoche = new PonerEnMarcha.FormaDeArrancar(coche.ArrancarCoche);
            PonerEnMarcha.FormaDeArrancar arrancarMoto = new PonerEnMarcha.FormaDeArrancar(moto.ArrancarMoto);

            PonerEnMarcha.Arranca(arrancarCoche);
            PonerEnMarcha.Arranca(arrancarMoto);
            

        }

        public class PonerEnMarcha
        {

            public delegate bool FormaDeArrancar();

            public void Arranca(FormaDeArrancar forma)
            {
                if(!forma())
                    Console.WriteLine("arrancoooo");
                else
                    Console.WriteLine("NO SIRVE TROLO");
            }

        }

        public class Coche
        {
            public bool ArrancarCoche()
            {
                Console.WriteLine("Introduce la llave para girarla");
                return true;
            }
        }

        public class Moto
        {
            public bool ArrancarMoto()
            {

                Console.WriteLine("Pulse el boton y pongase en contacto");
                return true;

            }
        }

    }
}
