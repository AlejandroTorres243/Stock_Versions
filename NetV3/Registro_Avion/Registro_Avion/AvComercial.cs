using System;
using System.Collections.Generic;
using System.Text;

namespace Registro_Avion
{
    class AvComercial : Avion
    {

        public AvComercial(string model, string compania, DateTime fecha) : base(model, compania, fecha)
        {
            Hora = 16;
        }

    }
}
