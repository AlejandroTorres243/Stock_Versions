using System;
using System.Collections.Generic;
using System.Text;

namespace Poli
{
    #region Inicializacion



    #endregion

    class Carro
    {

        int Ruedas, Motor, Puertas;
        string Llantas, Ventana, Marca, Modelo;
        bool Asientos;

        public Carro(int Motor, int Ruedas, int Puertas, string Marca, string Modelo)
        {
            this.Marca = Marca;
            this.Modelo = Modelo;
            this.Motor = Motor;
            this.Ruedas = Ruedas;
            this.Puertas = Puertas;
        }

        class Tractor : Carro {

            public Tractor(int Motor, int Ruedas, int Puertas, string Marca, string Modelo) : base(Motor, Ruedas, Puertas, Marca, Modelo)
            {



            }

            public void Carga()
            {

                Console.WriteLine("Lleva una carga el tractor");

            }

            public string GetModelo()
            {
                return "El modelo es " + Modelo;
            }

        }

    }




}
