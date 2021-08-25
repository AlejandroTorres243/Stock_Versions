using System;
using System.Collections.Generic;
using System.Text;

namespace Conversor
{
    
    class PedirMostrar
    {
        public static int SeleccionMoneda;
        public static double PedirImporte()
        {
            Console.WriteLine("DIGAME EL IMPORTE \n");
            Console.Write("Importe: ");
            string Importe = Console.ReadLine();
            double importeParseado = 0;

            try //Revisar bien segundo intento se cae
            {
                //Importe = Console.ReadLine();
                importeParseado = double.Parse(Importe);
            }

            catch (FormatException e)
            {
                Console.WriteLine("Debe meter cifras numericas");

                throw e;
            }

            catch (Exception e)
            {
                Console.WriteLine("Debe meter cifras numericas");

                throw e;

            }

            Console.Clear();
            return importeParseado;

        }
        public static string PedirTipoMonedaOrigen()
        {
            Console.WriteLine("Digame el tipo de moneda que tiene: ");
            Console.WriteLine("1. EURO");
            Console.WriteLine("2. DOLAR");
            Console.WriteLine("3. LIBRA");

            Console.Write("Opcion: ");
            int monedaParseada = 0;
           


            try
            {

                string TipoMoneda = Console.ReadLine();
                monedaParseada = Int32.Parse(TipoMoneda); // try cacth
                SeleccionMoneda = monedaParseada;

            }

            catch (FormatException e)
            {
                Console.WriteLine("Error en el formato");
                throw e;
            }


            catch (Exception e)
            {

                Console.WriteLine("Error no es el formato adecuado");
                throw e;

            }
            
            if (monedaParseada == 1)
            {
                Console.WriteLine("La moneda que ha escogido es el EURO");
                return "EUR";
            }
            if (monedaParseada == 2)
            {
                Console.WriteLine("La moneda que ha escogido es el DOLAR");
                return "USD";
            }
            if (monedaParseada == 3)
            {
                Console.WriteLine("La moneda que ha escogido es el LIBRA");
                return "GBP";
            }
            else
            {
                return "0";
            }

        }
        public static string PedirTipoMonedaDestino()
        {

            string TipoMoneda;
            

            int monedaParseada = SeleccionMoneda;

            switch (monedaParseada)
            {
                case 1:
                    Console.WriteLine("Digame el tipo de moneda que quiere: ");
                    Console.WriteLine("2. DOLAR");
                    Console.WriteLine("3. LIBRA");
                    Console.Write("Opcion: ");
                    TipoMoneda = Console.ReadLine();
                    try
                    {
                         monedaParseada = Int32.Parse(TipoMoneda);
                        SeleccionMoneda = monedaParseada;
                    }
                    catch (FormatException e)
                    {
                        Console.WriteLine("Error en el formato");
                        throw e;
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Error de formato intente de nuevo");
                        throw e;
                    }
                    break;
                case 2:
                
                    Console.WriteLine("Digame el tipo de moneda que quiere: ");
                    Console.WriteLine("1. EURO");
                    Console.WriteLine("3. LIBRA");
                    Console.Write("Opcion: ");
                    TipoMoneda = Console.ReadLine();
                    try
                    {
                        monedaParseada = Int32.Parse(TipoMoneda);
                        SeleccionMoneda = monedaParseada;
                    }
                    catch (FormatException e)
                    {
                        Console.WriteLine("Error en el formato");
                        throw e;
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Error de formato intente de nuevo");
                        throw e;
                    }
                    break;
                case 3:

                    Console.WriteLine("Digame el tipo de moneda que quiere: ");
                    Console.WriteLine("1. EURO");
                    Console.WriteLine("2. DOLAR");
                    Console.Write("Opcion: ");
                    TipoMoneda = Console.ReadLine();
                    try
                    {
                        monedaParseada = Int32.Parse(TipoMoneda);
                        SeleccionMoneda = monedaParseada;
                    }
                    catch (FormatException e)
                    {
                        Console.WriteLine("Error en el formato");
                        throw e;
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Error de formato intente de nuevo");
                        throw e;
                    }
                    break;

                default:
                    break;
            }

          //  Console.Write("Opcion: ");
          //  string TipoMoneda = Console.ReadLine();

            if (SeleccionMoneda == 1)
            {
                Console.WriteLine("La moneda que ha escogido es el EURO");
                return "EUR";
            }
            if (SeleccionMoneda == 2)
            {
                Console.WriteLine("La moneda que ha escogido es el DOLAR");
                return "USD";
            }
            if (SeleccionMoneda == 3)
            {
                Console.WriteLine("La moneda que ha escogido es el LIBRA");
                return "GBP";
            }
            else
            {
                return "0";
            }

        }
    }

}