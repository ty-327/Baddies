using BetAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace BetAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController (MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            return context.Movies.Where(m => m.Edited == "Yes" ).OrderBy(m => m.Title).ToArray();
        }
    }
}
