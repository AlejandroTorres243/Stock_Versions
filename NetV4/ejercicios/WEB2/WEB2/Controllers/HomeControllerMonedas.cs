using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Moneda()
        {
            return View();
        }

    }
}
