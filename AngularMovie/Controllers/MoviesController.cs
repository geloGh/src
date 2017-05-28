using System;
using System.Collections.Generic;
using System.Linq;
using AngularMovie.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AngularMovie.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private static string[] Titles = new[]
        {
            "Allied", "Spiderman", "Fight Club", "Mission Imposible", "Back to the Future", "Solaris", "Piknik na obochene", "Trafic", "Fantomas", "Waterloo"
        };

        [HttpGet("[action]")]
        public IEnumerable<Film> List()
        {
            var rng = new Random();
            return Enumerable.Range(1, 6).Select(index => new Film
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),            
                Title = Titles[rng.Next(Titles.Length)]
            });
        }

       
    }
}