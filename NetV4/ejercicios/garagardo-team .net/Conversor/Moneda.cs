using System;
using System.Collections.Generic;
using System.Text;

namespace Conversor
{
    class Moneda
    {
        public string Nombre;
        public string TipoMoneda;



        #region Constructores

        public Moneda(string Nombre, string TipoMoneda)
        {
            this.Nombre = Nombre;
            this.TipoMoneda = TipoMoneda;
        }

        #endregion


        #region Getters y setters

        public string getMonedaNombre()
        {
            return this.Nombre;
        }

        public string GetTipoMoneda()
        {
            return this.TipoMoneda;
        }


        #endregion


    }
}
