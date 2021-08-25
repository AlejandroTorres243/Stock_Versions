using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaManu
{
    class EntradaCuenta
    {
        string Correo, Password;

        #region Crear usuario de acceso

        public string Crear_Usuario()
        {

            Console.Write("User: ");
            Correo = Console.ReadLine();

            return Correo;

        }

        #endregion

        #region Crear contrasena de acceso

        public string Crear_Password()
        {

            Console.Write("Password: ");
            Password = Console.ReadLine();

            return Password;

        }

        #endregion
    }
}
