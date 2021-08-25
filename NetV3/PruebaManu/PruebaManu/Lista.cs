using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaManu
{
    class Lista
    {
        List<Cuenta> usuarios = new List<Cuenta>(); 
        EntradaCuenta entradatos = new EntradaCuenta();
        string usuario, password;

        public Lista()
        {


            Console.WriteLine("Welcome to the Conventor of Money\n");
            usuario = entradatos.Crear_Usuario();
            password = entradatos.Crear_Password();

            Cuenta cuenta = new Cuenta { user = usuario, password = password };

            usuarios.Add(cuenta);

            Console.WriteLine("\nCreate user!!!!");
            Console.ReadLine();

            Console.Clear();

            /* Cuenta cuenta = new Cuenta{user = "Manu231", password = "1234"};
            Cuenta cuenta2 = new Cuenta{user = "Manu231", password = "1234"};
            Cuenta cuenta3 = new Cuenta{user = "Manu231", password = "1234"};
            
            
            usuarios.Add(cuenta);
            usuarios.Add(cuenta2);
            usuarios.Add(cuenta3);
          
    
            foreach (Cuenta conteo in usuarios)
            {
                Console.WriteLine(conteo.user);
            }     
            
            
            */

        }

        public bool Login(string usuario, string password)
        {
            bool encontrado = false;

            foreach (Cuenta cuenta in usuarios)
            {

                if ((cuenta.user == usuario) && (cuenta.password == password))
                {
                    encontrado = true;
                    cuenta.status = "Online";
                }
                else
                    encontrado = false;

            }

            return encontrado;

        }
    }

}
