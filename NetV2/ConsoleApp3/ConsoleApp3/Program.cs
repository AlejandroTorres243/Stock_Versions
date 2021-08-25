using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {

            #region Inicializacion_Pokemones

            Pokemon Pikachu = new Pokemon("Pikachu", "Electrico", 100);
            Pokemon Raichu = new Pokemon("Raichu", "Fuego", 100);
            Pokemon Bolbasur = new Pokemon("Bolbasur", "Agua", 100);
            Pokemon Miau = new Pokemon("Miau", "Tierra", 100);

            Raichu.Salud = 5;

            #endregion

            #region Combate

            Pikachu.atacar(Raichu);
            Raichu.atacar(Pikachu);

            Console.WriteLine("La vida de pikachu es " + Pikachu.Salud);
            Console.WriteLine("La vida de pikachu es " + Raichu.Salud);

            Console.WriteLine("El numero de Instacias de Pokemon es: " + Pokemon.Get_Num_Instancias());

            #endregion

        }
    }
}
