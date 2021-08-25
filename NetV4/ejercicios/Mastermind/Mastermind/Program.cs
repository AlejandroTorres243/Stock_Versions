using System;

namespace Mastermind
{
    class Program
    {
        static void Main(string[] args)
        {
            Mastermind Juego = new Mastermind();

            Juego.Bienvenida();
            

        }

    }



    class Mastermind
    {

        public static int TamCom = 5; //Num de valores de cada combinacion
        public static int MinVal = 1; //valor minimo en una combinacion
        public static int MaxVal = 8; //valor maximo en una combinacion
        public static int MaxInt = 10; //numero maximo de intentos permitidos

        #region Mensaje

        public void Bienvenida()
        {

            Console.WriteLine("!Bienvenido a Mastermind!\nTienes 10 intentos.\nCada intento debe ser una combinacion de 5 digitos entre 1 y 8");

        }

        #endregion

        #region Generando_Vector_Aleatorio

        /* Genera un vector con valores enteros aleatorios en un intervalo cerrado
         * 
         * t numero de elementos del vector n=5
         * min extremo izquierdo del intervalo min = 0
         * max extremo derecho del intervalo max = 4
         * 
         */

        public static int[] GenerarVectorAleatorio(int T, int Min, int Max)
        {
            /*
             *  Generando vector
             */

            int[] Vector = new int[T]; // creo el vector 

            /*
             * Generando numero aleatorio
             */ 

            Random Rand = new Random(); // instancio el random
            
            for(int Cont=0; Cont < T; Cont++)
            {
                Vector[Cont] = Rand.Next(Min, Max); //asigno el valor a la caja del vector
            }

            return Vector;       

        }
        #endregion

        #region Lectura_Teclado

        /* 
         * Lee una combinacion del usuario desde teclado con valores en el rango permitido
         * 
         * t numero de elementos del vector n=5
         * min extremo izquierdo del intervalo min = 0
         * max extremo derecho del intervalo max = 4
         * 
         */

        public static int[] Leer_Jugada(int T, int Min, int Max)
        {
            
            int[] Vector = new int[T];
            bool NumeroDeDigitos = false;
            bool EsEntero = true;
            bool EstaEnRango = true;

            do
            {
                NumeroDeDigitos = true;
                EsEntero = false;
                EstaEnRango = false;

                Console.WriteLine("Jugada: ");
                string Entrada = Console.ReadLine();
                string[] ArrayEntrada = Entrada.Split(' ');

                if (ArrayEntrada.Length == T) //Si el numero por lo menos coincide con el numero de algo entrado
                {
                    NumeroDeDigitos = true;
                    for (int Cont2 = 0; Cont2 < ArrayEntrada.Length; Cont2++)
                    {

                        int Num = 0;

                        if (int.TryParse(ArrayEntrada[Cont2], out Num))
                        {
                            if ((Num > Min) && (Num <= Max))
                            {
                                Vector[Cont2] = Num;
                            }

                            else
                            {
                                EstaEnRango = false;
                            }

                        }

                        else
                        {
                            EsEntero = false;
                        }

                        if(EstaEnRango == false)
                            Console.WriteLine($"Error los valores deben estar en el intervalo [{Min} y {Max}]");

                        if(!EsEntero)
                            Console.WriteLine("Error los valores deben ser de tipo entero");

                    }

                }

            } while ((NumeroDeDigitos == false) || (EsEntero == false) || (EstaEnRango == false));

            Console.WriteLine("Entrada correcta");

            return Vector;


        }

        #endregion

        #region Hay_Repetido
       
        /*
         * Comprueba si en un vector hay un elemento repetido
         * 
         * Vector comprueba
         * return Resultado de la comprobacion
         * 
         */

        public static bool HayRepetidos(int[] Vector)
        {

            bool NumeroRepetido = false;

            for(int Cont3 = 0; Cont3 < Vector.Length; Cont3++)
            {

                for(int Cont4 = 1; Cont4 < Vector.Length; Cont4++)
                {

                   /* if(Cont3 == Cont4)
                        if(Vector[Cont3] == Vector[Cont4])
                            Console.WriteLine();
                    else
                        if(Vector[Cont3] == Vector[Cont4])
                            Console.WriteLine();
                    */

                    if(Cont3 != Cont4)
                    {
                        if (Vector[Cont3] == Vector[Cont4])
                            NumeroRepetido = true;
                    }

                }

            }

            return NumeroRepetido;

        }

        #endregion

        #region Combinacion

        /*
         * Muestra una combinacion por pantalla
         * 
         * V es un vector con la combinacion a mostrar
         * 
         */ 

        public static void MostrarCombinacion(int[] Vector)
        {

            for(int Cont = 0; Cont < Vector.Length; Cont++)
            {
                Console.WriteLine(Vector[Cont]);
            }

        }

        #endregion

        #region Contar_Jaque

        /*
         *Contabiliza el numero de jaques entres dos combinaciones sin repeticion 
         * 
         * c1 cinbinacion primera
         * c2 combinacion segunda
         * return de jaques
         * 
         */ 

        public static int Contar_Jaques(int[] C1, int[] C2)
        {

            int jaque, mate;

            jaque = 0;
            mate = 0;

            for(int R1 = 0; R1 < C1.Length; R1++)
                for(int R2 = 0; R2 < C2.Length; R2++)
                {
                    if(R1 == R2)
                        if(C1[R1] == C2[R2])
                }

        }

        #endregion

    }

}
