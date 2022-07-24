using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace API
{
    public class Startup
    {

        public readonly IConfiguration _config ;

        // havaset be command ha bashe
        // baraue migration 
        // 1-aval bauad beri az Nuget Microsoft.EntityFrameworkCore.Sqlite nasb kon
        // 2- version esh hatman bauad 5.0.17 
        // 3- baud beri dotnet-ef roh ham nasb koni boro dakhele
        // nuget.com ebarate dotnet-ef ro search kon
        // ue bar nasb koni kafiue vali bauad inam hatman
        // version esh 5.0.17 
        // miam in package ro ham nasb mikonim Microsoft.EntityFrameworkCore.Design
        // va in ham bauad version 5.0.17 bashe 
        // baraue migration mitoni az in command ha estefade koni 
        // dotnet ef migrations add IntialCreate -o Data/migration
        // bad baraue update kardan file ha bauad az command 
        // dotnet ef database update 
        // estefade konid 
        // va database shoma sakhte mishavad
        // plugin SQLite dakhle Extension plugin khobi baraue modriat sqlite ast
        // nasbesh kardi ctrl+shift+p ro bezan 
        // var roue open database click kon 
        public Startup(IConfiguration config)
        {
            _config = config;
      
        }

       

        public void ConfigureServices(IServiceCollection services)
        {
            // toue inja miaum context add mikonim va behesh migim ke az
            // koja bekhone toue in mored => dare az DefaultConnection mikhone 
            // ke kelid mast va dar dakhle appsettongs.development.json 
            // set mishe
            
            services.AddDbContext<Data.DataContext> (options=>{
                options.UseSqlite(_config.GetConnectionString("DefaultConnection"));
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPIv5 v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
