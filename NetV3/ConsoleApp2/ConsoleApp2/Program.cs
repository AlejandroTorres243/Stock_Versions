using System;
using System.Collections.Generic;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {

            /*           #region Arreglo

                       int[] Coord = new int[2] {1, 23};

                       for(int Cont = 0; Cont < Coord.Length; Cont++){
                           Console.WriteLine(Coord[Cont]);
                       }

                       #endregion
           */

            /* #region Ej_Arreglo_Cal_Media_Temperatura

             float[] Temperatura = new float[5] {35.0f, 27.0f, 21.5f, 16, 13};

             float Acumulador = 0;

             float Media_Aritmetica = 0;

             for(int Cont = 0; Cont < Temperatura.Length; Cont++){

                 Acumulador += Temperatura[Cont];

             }

             Media_Aritmetica = Acumulador / Temperatura.Length;

             Console.WriteLine("La media aritmetica de la temperatura es " + Media_Aritmetica + "Cº");

             #endregion*/

            /*  #region Matriz

              int[,] Matriz_Temperatura = new int[7,4];

              for(int Fila = 0; Fila < 7; Fila++)
              {

                  for (int Columna = 0; Columna < 4; Columna++)
                  {
                      Matriz_Temperatura[Fila, Columna] = 0;

                      Console.Write( Matriz_Temperatura[Fila, Columna]+ "");

                  }

                  Console.WriteLine("");

              }

              #endregion*/

            /* Ej. personal buscar for each para matriz */

            /* #region For-Each

             float[] Temperatura = new float[5] { 10, 13, 18, 23, 25};
             foreach (float Cada_Temp in Temperatura)
             {
                 Console.WriteLine(Cada_Temp);
             }

             #endregion
             */

            /*#region Funcion_Vacia

            string Name = "Manuel";
            string Ap = "Higueras";
            int Temp = 28;

            void Saludo(string Nombre, string Apellido, int Temp)
            {

                Console.WriteLine("Bienvenido " + Nombre + " " + Apellido + " hace " + false + "Cº");

            }

            Saludo(Name, Ap, 21);
            Saludo(Console.ReadLine(), Console.ReadLine(), Temp);

            #endregion*/

            /*#region Funcion_Devuelve_Valor

            float Recogida = 0;

            float SumaFloats(float N1, float N2)
            {

                float Contenedor = N1 + N2;

                return Contenedor; 

            }

            Recogida = SumaFloats(2, 100.1f);

            #endregion*/

            #region Listas

            List<int> Lista_Entero = new List<int>();

            Lista_Entero.Add(2);
            int Valor = 4;
            Lista_Entero.Add(Valor);
            Lista_Entero.Add(3);

            Lista_Entero.Sort();

            Lista_Entero.RemoveAt(1);

            foreach (int Elemento in Lista_Entero)
            {
                Console.WriteLine(Elemento + " ");
            }

            int[] ArrayEnteros = Lista_Entero.ToArray();
           

            #endregion

        }
    }
}

/*
 * patron de diseño
 * pruebas unitarias
 * crear cuenta en kahoot
 * Investigar comandos de las Listas
 */
