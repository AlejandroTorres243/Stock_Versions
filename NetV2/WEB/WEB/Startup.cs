using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace WEB
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        //public void ConfigureServices(IServiceCollection services)
        //{
        //}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        //{
        //    if (env.IsDevelopment())
        //    {
        //        app.UseDeveloperExceptionPage();
        //    }

        //    app.Run(async (context) =>
        //    {
        //        await context.Response.WriteAsync("Hello World YA COMENZAMOS!!!!!");
        //    });
        //}

        /*
         *
         * ESTO ES LO PRIMERO QUE SE NECESITA PARA LA PAG
         * 
         */

        public void ConfigureServices(IServiceCollection services)
        {
            //register framework services  
            services.AddMvc();
            //register our own services (more later)

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();  
            app.UseStatusCodePages();  
            app.UseStaticFiles();  
            app.UseMvcWithDefaultRoute();
            app.UseWelcomePage();
        }


}
}
