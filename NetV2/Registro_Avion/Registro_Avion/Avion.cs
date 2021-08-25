using System;
using System.Collections.Generic;
using System.Text;

namespace Registro_Avion
{
    class Avion
    {
        string NombreCompania { get; set; }
        private string Modelo { get; set; }
        private DateTime Fecha { get; set; }
        public int Hora;

        public Avion(string compania, string model, DateTime fechas)
        {

            NombreCompania = compania;
            Modelo = model;

        }

        public DateTime Revision_Avion()
        {

            int SumaDias = 1000 / Hora;

            DateTime FechaCalculada = Fecha.AddDays(SumaDias);

            return FechaCalculada;

        }

    }
}
