using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BethanysPieShop.Models
{
    public class AppDbContext: IdentityDbContext<UsuarioConversor> //SE CREA UNA INTERF DE USUARIO
    {
        //SE CREA UNA BD PARA LA AUTENTICACION 11 am a 1 pm

        //ESTA BASE DE DATOS DE USUARIO (IdentityDbContext)SE IMPLEMENTARA EN EL PROYECTO DE MONEDAS
        //luego se hace un add-migration "Users"con el nuevo cambio (users)

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Pie> Pies { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }

    }
}
