﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
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

namespace AppSincrona
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        private int count = 1;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void RssButton_Click(object sender, RoutedEventArgs e)
        {

            var client = new WebClient();
            var data = client.DownloadString("http://www.worldslongestwebsite.com");

            client.DownloadStringCompleted += Client_DownloadStringCompleted;

            Thread.Sleep(10000);

            RssText.Text = data;

        }

        private void Client_DownloadStringCompleted(object sender, DownloadStringCompletedEventArgs e)
        {
            RssText.Text = e.Result;
        }

        private void CounterButton_Click(object sender, RoutedEventArgs e)
        {
            CounterText.Text = $"Counter: {count++}";
        }
    }
}

