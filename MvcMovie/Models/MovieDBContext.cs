using System.Data.Entity;

namespace MvcMovie.Models
{
    public class MovieDBContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}