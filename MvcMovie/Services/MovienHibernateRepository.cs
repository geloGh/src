using System;
using System.Collections.Generic;
using System.Linq;
using Autofac.Extras.DynamicProxy;
using MvcMovie.App_Start;
using MvcMovie.Contract.Services;
using MvcMovie.Helpers;
using MvcMovie.Models;
using MvcMovie.Services.nHibernate;
using NHibernate;
using NHibernate.Linq;

namespace MvcMovie.Services
{
    [Intercept(typeof(Log4NetInterceptor))]
    public class MovienHibernateRepository : IMovieRepository
    {
        public void Remove(Movie movie)
        {

            if (movie != null)
            {
                using (ISession session = NHibernateHelper.OpenSession())
                using (var tx = session.BeginTransaction())
                {
                    session.Delete(session.Load<Movie>(movie.ID));

                    tx.Commit();
                }
            }
        }

        public List<string> LoadGenres()
        {
            var GenreLst = new List<string>();

            using (ISession session = NHibernateHelper.OpenSession())
            {
                GenreLst.AddRange(session.Query<Movie>().ToList().OrderBy(x => x.Genre).Select(x => x.Genre).Distinct());

            }
            return GenreLst;
        }

        public void Create(Movie movie)
        {
            if (movie == null)
                throw new ArgumentNullException(nameof(movie));

            using (ISession session = NHibernateHelper.OpenSession())
            using (var tx = session.BeginTransaction())
            {
                session.Save(movie);
                tx.Commit();
            }
        }
        public void Update(MovieEditModel movieModel)
        {
            if (movieModel == null)
                throw new ArgumentNullException(nameof(movieModel));
            using (ISession session = NHibernateHelper.OpenSession())
            using (var tx = session.BeginTransaction())
            {
                var movie = session.Load<Movie>(movieModel.ID);

                movie.MovieCategories.UpdateCollectionFromModel(session.Query<Category>().AsQueryable(), movieModel.CategoryIds);


                movie.Title = movieModel.Title;
                movie.Genre = movieModel.Genre;
                movie.Link = movieModel.Link;
                movie.Description = movieModel.Description;
                movie.ReleaseDate = movieModel.ReleaseDate;
                movie.Price = movieModel.Price;
                session.Update(movie);
                tx.Commit();
            }

        }

        public Movie FindById(int id)
        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                return session.Load<Movie>(id);
            }
        }

        public IList<Movie> Find(string movieGenre, string searchString)
        {

            using (ISession session = NHibernateHelper.OpenSession())
            {

                var movies = session.Query<Movie>().AsQueryable();

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
}