using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp3
{
    public class Pikachu : Pokemon
    {

        public Pikachu(string Nombre, int Salud, int NivelBateria) : base(Nombre, "Electrico")
        {
            this.NivelBateria = NivelBateria;
        } 

        public int NivelBateria { get; private set; }

        public void CargarBateria() 
        {
            this.NivelBateria = 100;
        }

    }
}
