using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2.Models;

namespace WEB2
{
    public partial class HomeController : Controller
    {

        IVehiculo vehiculo;

        public HomeController(IVehiculo vehiculo)
        {
            this.vehiculo = vehiculo;
        }


        public IActionResult Index()   //CONTROLADOR(CLASE)
        {
            /*
            ViewData["Nombre"] = "Pedro";    //PRIMER MODELO PARA LLAMAR A LAS VAR
            ViewData["FechaHoy"] = DateTime.Now;
            ViewData["Title"] = "Index";

            //AMBOS MODELOS TIENEN LA MISMA FUNCIONALIDAD

            ViewBag.Nombre = "Pedro"; //SEGUNDO MODELO PARA LLAMAR A LAS VAR
            ViewBag.Edad = 53;
            ViewBag.Fecha = DateTime.Now;

            //CLASE PERSONALIZADA

            var persona = new Persona { 
            
                Nombre = "Pepe", Localidad = "Valladolid"
            
            };

            //return View(persona);
            //return View();
            */
            ViewBag.PrecioVehiculo = vehiculo.Precio;
            return View();
        }

        public class Persona
        {

            public string Nombre { get; set; }
            public string Localidad { get; set; }

        }

        /*public IActionResult Inicio()
        {
            return View();
        }


        public IActionResult Aparte()
        {
            return View();
        }
        */

    }
}
