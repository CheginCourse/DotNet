using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        // constructor bauad hatman intiliaze beshe
        public DataContext( DbContextOptions options) : base(options)
        {
        }
        // inja miaum Database ro taiin mikonim
        public DbSet<AppUser> Users { get; set; }
    }
}