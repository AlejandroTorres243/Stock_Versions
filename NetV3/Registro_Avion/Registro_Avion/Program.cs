using System;
using System.Collections.Generic;
using System.Threading.Channels;

namespace Registro_Avion
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Avion avion = new AvCarga("FAIQ214", "BJK Australia", new DateTime(2019, 7, 12));
            Avion SIXboarflix = new Avioneta("FAIQ214", "BJK Australia", new DateTime(2019, 7, 12));
            Avion avion2 = new AvComercial("FAIQ214", "BJK Australia", new DateTime(2019, 7, 12));

            List<Avion> lista = new List<Avion>();

            
            lista.Add(avion);
            lista.Add(SIXboarflix);
            lista.Add(avion2);

            foreach (Avion conteo in lista)
            {
                Console.WriteLine(conteo.Revision_Avion());
            }

        }
    }
}
