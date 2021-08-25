using Contact2.Datos;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Contact2
{
    /// <summary>
    /// Lógica de interacción para MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            using (var entity = new Model1Container() ) {

               List<Moneda> listaMonedas = entity.Monedas.ToList();
               // DbSet<Factor> listaFactores = entity.Factores;
               List<Factor> listaFactores = entity.Factores.ToList();

                GridMonedas.ItemsSource = listaMonedas;

            };
        }
    }
}
