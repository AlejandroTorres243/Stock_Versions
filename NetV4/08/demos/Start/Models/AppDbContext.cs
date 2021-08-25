using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BethanysPieShop.Models
{

    //PROCESO PARA CREAR SEGURIDAD EN LA APLICACION

    public class AppDbContext: IdentityDbContext //BASE DE DATOS QUE EN NUESTRO CASO SERIA DE MONEDAS 
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Pie> Pies { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
    }
}
