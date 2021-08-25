using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2.Models
{
    public class SeatIbiza : IVehiculo
    {
        public double Precio { get; set; }

        public SeatIbiza()
        {
            Precio = 3000;
        }

    }
}
