using System;
using System.Collections.Generic;
using System.Text;

namespace Conversor
{
    class ConversorInterno
    {

        public static List<Factor> Factores = new List<Factor>();

        public ConversorInterno()
        {
            PrepararDatos();
        }

        public static double CalculoEuros(double NumeroMonedas, string Etiqueta1, string Etiqueta2)
        {
            double Resultado = 0;

            foreach (var item in Factores)
            {
                if (item.MonedaOrigen == Etiqueta1)
                {
                    if (item.MonedaDestino == Etiqueta2)
                    {
                        Resultado = NumeroMonedas * item.FactorConversion;
                       
                    }
                }
            }
            
            Console.Write("Resultado: ");
            return Math.Round(Resultado,4) ;
        }


        public static void PrepararDatos()
        {
            Factores = new List<Factor>()
            {
                new Factor
                {
                    MonedaOrigen = "EUR",
                    MonedaDestino = "USD",
                    FactorConversion = 1.11,

                },
                new Factor
                {
                    MonedaOrigen = "EUR",
                    MonedaDestino = "GBP",
                    FactorConversion = 0.86,

                },
                new Factor
                {
                    MonedaOrigen = "GBP",
                    MonedaDestino = "USD",
                    FactorConversion = 1.29,

                },
                new Factor
                {
                    MonedaOrigen = "GBP",
                    MonedaDestino = "EUR",
                    FactorConversion = 1.16,

                },
                new Factor
                {
                    MonedaOrigen = "USD",
                    MonedaDestino = "EUR",
                    FactorConversion = 0.90,

                },
                new Factor
                {
                    MonedaOrigen = "USD",
                    MonedaDestino = "GBP",
                    FactorConversion = 0.78,

                }


            };
        }


    }
}
