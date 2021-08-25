using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Conversor
{
    class Menu
    {
        Lista lista = new Lista();

        public void Pregunta()
        {

            int Respuesta = -1;
            int numeroParada = 0;

            while (numeroParada == 0)
            {
                
                Console.WriteLine("¿Quiere hacer otra operacion? ");
                Console.WriteLine("1. Si ");
                Console.WriteLine("2. No ");
                Console.WriteLine("\n Opcion: ");

                try
                {
                    Respuesta = Int32.Parse(Console.ReadLine());
                    //throw new System.Exception();
                }
                catch (Exception excepcion)
                {
                    Console.WriteLine("Paco pon un numero");
                    //throw excepcion;
                }




                switch (Respuesta)
                {
                    case 1:
                        Console.Clear();
                        Presentacion();
                        break;
                    case 2:
                        numeroParada = 1;
                        System.Environment.Exit(0);
                        break;

                    default:
                        Console.WriteLine("Los numeros tienen que estar entre el 0 y 2");
                        break;
                }

            }
        }

        public void Presentacion()
        {

            int Op = -1;
            int Cond;
            string Usuario, Password;

            while (Op != 0)
            {

                Console.WriteLine("Menu\n");
                Console.WriteLine("1.Login user");
                Console.WriteLine("2.Create user");
                Console.WriteLine("0.Exit\n");

                Console.Write("Option: ");
                Cond = Int32.Parse(Console.ReadLine());

                switch (Cond)
                {

                    case 1:
                        Console.Clear();

                        Console.WriteLine("LOG-IN\n");
                        Console.Write("User: ");
                        Usuario = Console.ReadLine();
                        Console.Write("Password: ");
                        Password = Console.ReadLine();

                        if (lista != null)
                        {

                            if (lista.Login(Usuario, Password) == true)
                            {

                                try
                                {
                                    Console.Clear();
                                    ConversorInterno.PrepararDatos(); // Preparamos las listas para trabajar despues con ellas
                                    Console.WriteLine(ConversorInterno.CalculoEuros(
                                        PedirMostrar.PedirImporte(),
                                        PedirMostrar.PedirTipoMonedaOrigen(),
                                        PedirMostrar.PedirTipoMonedaDestino())); // hacemos los calculos con los valores dados
                                    Pregunta();
                                }
                                catch (Exception e)
                                {
                                    Console.WriteLine(ConversorInterno.CalculoEuros(
                                        PedirMostrar.PedirImporte(),
                                        PedirMostrar.PedirTipoMonedaOrigen(),
                                        PedirMostrar.PedirTipoMonedaDestino())); // hacemos los calculos con los valores dados
                                    Pregunta();
                                }

                            }
                            else
                            {
                                Console.WriteLine("No existe este usuario o clave incorrecta");
                            }

                        }

                        else
                        {

                            Console.WriteLine("No existe ningun usuario creado");

                        }

                        Console.ReadLine();
                        Console.Clear();

                        break;

                    case 2:
                        Console.Clear();
                        lista.CreaUsuario();
                        break;

                    /*case 3:
                        Console.Clear();
                        lista.ImprimeLogin();
                        Console.ReadLine();
                        Console.Clear();
                        break;*/

                    case 0:
                        Op = 0;
                        break;

                    default:
                        Console.Write("Error!!! Escoja una opcion de las que hay\n Cargando...");
                        //Console.ReadLine();
                        Thread.Sleep(3000);
                        Console.Clear();
                        break;

                }

            }
        }
    }
}
