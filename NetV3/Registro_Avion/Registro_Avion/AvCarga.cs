using System;
using System.Collections.Generic;
using System.Text;

namespace Registro_Avion
{
    class AvCarga : Avion
    {

        public AvCarga(string model, string compania, DateTime fecha) : base(compania, model, fecha)
        {
            Hora = 14;
        }


    }
}
