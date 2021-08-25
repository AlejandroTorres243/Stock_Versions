using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaManu
{
    class Menu
    {
        //desarrollo de metodologia 
        //Para saltar una linea Console.readline

        Lista usuarios;

        public void Presentacion()
        {

            int Op = -1;
            int Cond;
            string Usuario, Password;

            while (Op != 0)
            {

                Console.WriteLine("Menu of Access\n");
                Console.WriteLine("1.Login user");
                Console.WriteLine("2.Create user");
                Console.WriteLine("0.Exit\n");

                Console.Write("Option: ");
                Cond = Int32.Parse(Console.ReadLine());

                switch (Cond)
                {

                    case 1: Console.Clear();

                        Console.WriteLine("Login\n");
                        Console.Write("User: ");
                        Usuario = Console.ReadLine();
                        Console.Write("Password: ");
                        Password = Console.ReadLine();

                        if (usuarios != null)
                        {

                            if (usuarios.Login(Usuario, Password) == true)
                            {
                                Console.WriteLine("Alex y Alvaro continuan aca"); //Nota: Condicion de Offline

                            }
                            else
                            {
                                Console.WriteLine("No existe este usuario");
                            }

                        }

                        else
                        {

                            Console.WriteLine("No existe la lista");

                        }
                        
                        Console.ReadLine();
                        Console.Clear();

                    break;

                    case 2: 
                        Console.Clear(); 
                        usuarios = new Lista(); 
                        break;

                    case 0:
                        Op = 0; 
                        break;

                }

            }

        }

    }
}
