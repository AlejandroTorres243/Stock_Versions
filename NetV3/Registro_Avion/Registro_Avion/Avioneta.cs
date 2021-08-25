using System;
using System.Collections.Generic;
using System.Text;

namespace Registro_Avion
{
    class Avioneta : Avion
    {
        

        public Avioneta(string model, string compania, DateTime fecha) : base(model, compania, fecha)
        { 
             Hora = 12;
        }

    }
}
