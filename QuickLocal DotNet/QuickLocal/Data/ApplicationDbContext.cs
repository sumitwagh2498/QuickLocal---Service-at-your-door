using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuickLocal.DTO;
using QuickLocal.Models;
namespace QuickLocal.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<AddService> AddServices { get; set; }
        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<UserView> UserView { get; set; }
        public DbSet<ServiceBooking> ServiceBookings { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Map UserView to your SQL view
            modelBuilder.Entity<UserView>().ToTable("aspnetusers");
        }

    }
}