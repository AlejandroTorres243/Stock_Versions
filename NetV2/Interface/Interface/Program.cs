using System;

namespace Interface
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    interface IDoumento{

        void LeerPrecio();

        void CalcularPrecio();
    
    }

    class Libro : IDoumento
    {
        public void CalcularPrecio()
        {
            throw new NotImplementedException();
        }

        public void LeerPrecio()
        {
            throw new NotImplementedException();
        }
    }

}
