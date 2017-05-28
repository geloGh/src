using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin.Security;
using MvcMovie.Contract.Services;
using MvcMovie.Helpers;
using MvcMovie.Models;

namespace MvcMovie.Services
{
    public class MovieEFRepository : IMovieRepository
    {
        private readonly MovieDBContext _db;

        public MovieEFRepository()
        {
            _db = new MovieDBContext();
        }

        public void Remove(Movie movie)
        {
            
            if (movie != null)
            
            _db.Movies.Remove(movie);
            _db.SaveChanges();
        }

        public List<string> LoadGenres()
        {
            var GenreLst = new List<string>();
            var GenreQry = from d in _db.Movies
                           orderby d.Genre
                           select d.Genre;

            GenreLst.AddRange(GenreQry.Distinct());

            return GenreLst;
        }

        public void Create(Movie movie)
        {
            if (movie == null)
                throw  new ArgumentNullException(nameof(movie));

            _db.Movies.Add(movie);
            _db.SaveChanges();
        }
        public void Update(MovieEditModel movieModel)
        {
            if (movieModel == null)
                throw new ArgumentNullException(nameof(movieModel));

            Movie movie = _db.Movies.FirstOrDefault(m => m.ID == movieModel.ID);
            if (movie == null)
            {
                throw  new ArgumentNullException($"Inable to find Movie with ID {movieModel.ID}");
                //return HttpNotFound($"Inable to find Movie with ID {movieModel.ID}");
            }

            movie.MovieCategories.UpdateCollectionFromModel(_db.Categories, movieModel.CategoryIds);


            movie.Title = movieModel.Title;
            movie.Genre = movieModel.Genre;
            movie.Link = movieModel.Link;
            movie.Description = movieModel.Description;
            movie.ReleaseDate = movieModel.ReleaseDate;
            movie.Price = movieModel.Price;

            _db.SaveChanges();

        }

        public Movie FindById(int id)
        {
            return _db.Movies.Find(id);
        }

        public IList<Movie> Find(string movieGenre, string searchString)
        {
           
            var movies = from m in _db.Movies
                         select m;

            if (!String.IsNullOrEmpty(searchString))
            {
                movies = movies.Where(s => s.Title.Contains(searchString));
            }

            if (!string.IsNullOrEmpty(movieGenre))
            {
                movies = movies.Where(x => x.Genre == movieGenre);
            }

            return movies.ToList();
        }
    }
}