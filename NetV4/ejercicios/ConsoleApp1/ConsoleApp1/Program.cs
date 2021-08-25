using System;

namespace ConsoleApp1
{
    class Program
    {
        // Def de enumeracion 
       enum Tip_vehiculo { coche, avion, tren, moto, metro, globo, otros};
       enum Vida { Vivo, Muerto};
       static void Main(string[] args)
        {
            /*   //Asignacion de enumeracion
               #region Def_Vehiculo
               Tip_vehiculo VehiculoA = Tip_vehiculo.avion;
               Tip_vehiculo VehiculoB = Tip_vehiculo.coche;
               #endregion
               /* Def. de pasajeros */
            /*
            #region Def_Pasajero
            int Pasajero = 0;
            Pasajero += 4;
            Console.WriteLine("Hello World!");
            Console.WriteLine("Pasajero:" + Pasajero);

            string Vehiculo = "Coche";
            int Cadena = Vehiculo.Length;
            string Texto = "EL " + Vehiculo + " TIENE " + Pasajero + " PASAJEROS";
            Console.WriteLine(Texto);
            #endregion
            */
            //Lectura por teclado
            /*
            #region Def_Lec_tecl
            Console.Write("Entrada de datos (string):");
            string date = Console.ReadLine();

            Console.WriteLine(date);
            #endregion
            */
            /*
            //Ejercicio if-else-else if
            #region Ej IF-ELSE-ELSE IF

            bool IsGreen, IsOrange, IsRed;

            IsGreen = true;
            IsOrange = false;
            //IsRed = false;
            //IsRed = !IsGreen & !IsOrange;
            IsRed = !(IsGreen | IsOrange);

            if (IsGreen)
                Console.WriteLine("Conduce sin problemas");

            else if (IsOrange)
                Console.WriteLine("Conduce con cuidado");

            else if(IsRed)
                Console.WriteLine("Para");

            #endregion
            */
            //Ejercicio switch
            #region Ej switch
            Console.WriteLine("Maquina de golocinas\n12.Fanta - 14.Coca-Cola - 15. Coca-Cola Zero");
            Console.Write("Code:");
            string entrada = Console.ReadLine();
            int passcode = Int32.Parse(entrada);

            switch (passcode)
            {
                case 12:
                    Console.WriteLine("Fanta");
                break;
                    Console.WriteLine("Coca-Cola");
                case 14:
                    Console.WriteLine("Nestea");
                break;
                case 15:
                    Console.WriteLine("Coca-Cola Zero");
                break;
                default:
                    Console.WriteLine("Opcion Incorrecta");
                break;
            }
            #endregion

            //Ejercicio Op Ternario

            #region Op_Tern

            bool IsMoving = true;

            Vida Status = (IsMoving) ? Vida.Vivo : Vida.Muerto;

            Console.WriteLine("Status: " + Status);

            Console.Write("Introduzca la hora 24:");
            int Hora = Convert.ToInt32(Console.ReadLine());

            string EstadoHora = "";
            int Hora_new;
            string formato;

            if (Hora >= 0 && Hora <=24)
            {

                Hora_new = (Hora > 12) ? Hora - 12 : Hora;

                formato = (Hora > 12) ? "PM" : "AM";
                Console.WriteLine("la hora es " + Hora + " y en nuevo formato es " + Hora_new + " " + formato);

            }

            else
            {

               EstadoHora = "la hora es " + Hora + " AM";

            }

            Console.WriteLine(EstadoHora);

            #endregion

            //Ejercicio Bucle While

            #region Ej_While

            int Cont = 0;

            while (Cont < 10){

                Console.Write("" + Cont + "-");
                Cont++;
            
            }

            #endregion

            //generador aleatorio

            #region Gen_aleatorio

            Random Sem = new Random();
            int CarasDado = 6;
            int Aleatorio = Sem.Next(1, CarasDado);

            #endregion

            //generador aleatorio con while y do while

            #region Rompe_Claves

            int codigo = 5712;
            int veces = 0;
            int aleatorio = -1;
            Random rand = new Random();

            while (aleatorio != codigo)
            {
                aleatorio = rand.Next(0, 9999);
                veces++;
            }

            /*            
            do{
                aleatorio = rand.Next(0, 9999);
                veces++;
            }while (aleatorio != codigo);
             */

            Console.WriteLine("\nRepitio tantas veces " + veces);
            #endregion

            #region Bucle_For_Dados

            Random Rand = new Random();
            int Num_six = 0;

            for(int i = 1; i <= 1000; i++)
            {
                int Tirada = Rand.Next(1, 7);
                Console.WriteLine(i + " " + Tirada);

                if(Tirada == 6)
                {
                    Num_six++;
                }

            }

            Console.WriteLine("Ha habido " + Num_six + " seises.");

            #endregion

            //FIN DEL PROGRAMA
        }
    }
}
