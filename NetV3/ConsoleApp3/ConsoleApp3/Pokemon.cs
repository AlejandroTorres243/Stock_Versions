using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp3
{
    public class Pokemon
    {
        /*
         * public string Nombre { get; private set; }
         * El public solo en las funciones o procedimientos y que las variables no sea  modificadas por elegancia de code
         */
        #region Campos
        public string Tipo { get;  set; }
        public string Nombre { get; set; }
        public int Salud { get; set; }
        //Status KIA - IN LIFE BOOLEAN
        #endregion

        #region Campos_Estaticos

        static private int Numero_Instacias = 0;
        private string v;

        #endregion

        #region Constructor

        /// <summary>
        /// Constructor por defecto
        /// </summary>
        /// <return>Inicializacion por defecto</return>
        public Pokemon()
        {
            Nombre = "Desconocido";
            Tipo = "Normal";
            Salud = 100;
            Numero_Instacias++;
        }

       // public Pokemon() : this("SN", "Normal", 100) { }

        //public Pokemon(string Nombre, string Tipo, int Salud) : this("SN", "Normal", 100) { }

        public Pokemon(string Nombre, string Tipo, int Salud)
        {
            this.Nombre = Nombre;
            this.Tipo = Tipo;
            this.Salud = Salud;
            Numero_Instacias++;
        }

        public Pokemon(string Nombre, string Tipo)
        {
            this.Nombre = Nombre;
            this.Tipo = Tipo;
            Numero_Instacias++;
        }

        /// <summary>
        /// Constructor de inicializacion completa
        /// </summary>
        /// <return>Asigna todos los valores</return>

        // public Pokemon(string Tipo, int Salud)
        //{

        // }



        #endregion

        #region Metodos
        /// <summary>
        /// Comprueba si lo ha esquivado.
        /// </summary>
        /// <returns>Si lo ha esquivado o no</returns>
        public bool Lo_esquivo()
        {
            Random Rand = new Random();
            // return (Rand.NextDouble() < 0.5f)? true: false; 
            /*if (Rand.NextDouble() < 0.5)
                return true;
            else
                return false;*/
            return (Rand.NextDouble() < 0.5);
        }
        // a - b
        public void atacar(Pokemon pokemon_enemy) 
        {

            if (!pokemon_enemy.Lo_esquivo()){
                Console.WriteLine(pokemon_enemy.Nombre + " ha sido atacado por " + this.Nombre);
                pokemon_enemy.Salud--;
            }


            else { 
                Console.WriteLine("El ataque de " + this.Nombre + " a " + pokemon_enemy.Nombre + " ha fallado");
            }          

        }

        /// <summary>
        /// Ataca a un pokemon especifico
        /// </summary>
        /// <returns>Quita vida o falla un ataque</returns>

        #endregion

        #region Metodos_Estaticos
        public static int Get_Num_Instancias()
        {
            return Numero_Instacias;
        }
        #endregion
/*
        #region Getters

        public int GetDevuelve_Salud()
        {
            return this.Salud;
        }

        /// <summary>
        /// Devuelve la vida del pokemon
        /// </summary>
        /// <returns>Regresa un valor entero</returns>

        #endregion

        #region Setters

        public void SetCambia_Salud(int Salud)
        {
            this.Salud = Salud;
        }

        /// <summary>
        /// Modifica la vida del pokemon.
        /// </summary>
        /// <returns>Cambia el valor entero</returns>

        #endregion
*/
    }
}
