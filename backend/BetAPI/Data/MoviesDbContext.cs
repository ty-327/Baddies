using Microsoft.EntityFrameworkCore;

namespace BetAPI.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options) { } //problem here

        public DbSet<Movies> Movies { get; set; }
    }
}
