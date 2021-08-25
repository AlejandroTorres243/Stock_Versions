using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2.Models
{
    public class Ferrari : IVehiculo
    {

        public double Precio { get; set; }

        public Ferrari()
        {
            Precio = 450000;
        }

    }
}
