using Microsoft.AspNetCore.Identity;
using System;

namespace BethanysPieShop.Models
{
    //SE IMPLEMENTA EL IdentityUser para la autenticacion y user


    public class UsuarioConversor : IdentityUser
    {
        public DateTime FechaNacimiento { get; set; }

        public int IdPais { get; set;}
    }
}