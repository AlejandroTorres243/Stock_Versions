using System;
using System.Collections.Generic;
using System.Text;

namespace Conversor
{
    class Lista
    {
        Cuenta Cuentas;
        List<Cuenta> ListaUsers;
        bool encontrado = false;

        public Lista()
        {
            ListaUsers = new List<Cuenta>();
        }

        public void CreaUsuario()
        {

            string usuario, contrasena;

            Console.WriteLine("Usuario: ");
            usuario = Console.ReadLine();
            Console.WriteLine("Password: ");
            contrasena = Console.ReadLine();

            Cuentas = new Cuenta { user = usuario, password = contrasena };

            AddUsuario(Cuentas);

        }


        public void AddUsuario(Cuenta usuario)
        {

            ListaUsers.Add(usuario);

        }


        public void ImprimeLogin()
        {

            foreach (Cuenta cuenta in ListaUsers)
            {
                Console.WriteLine(cuenta.user);
            }

        }

        public bool Login(string usuario, string password)
        {

            string valor, valor2;
            bool result, result2;

            for (int cont = 0; cont < ListaUsers.Count; cont++)
            {

                valor = ListaUsers[cont].user;
                valor2 = ListaUsers[cont].password;
                result = usuario.Equals(valor);
                result2 = password.Equals(valor2);
                if ((result == true) && (result2 == true))
                    return result;

            }

            result = false;

            return result;

        }

    }

}
