using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Contract.Services;
using MvcMovie.Helpers;
using MvcMovie.Models;

namespace MvcMovie.Controllers
{
    public class MoviesController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        private readonly IMovieRepository _movieRepository;


        public MoviesController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }


        // GET: /Movies/
        public ActionResult Index(string movieGenre, string searchString)
        {
            var GenreLst = new List<string>();

            //var GenreQry = from d in db.Movies
            //               orderby d.Genre
            //               select d.Genre;

            //GenreLst.AddRange(GenreQry.Distinct());

            GenreLst.AddRange(_movieRepository.LoadGenres());
            

            ViewBag.movieGenre = new SelectList(GenreLst);

            //var movies = from m in db.Movies
            //             select m;

            //if (!String.IsNullOrEmpty(searchString))
            //{
            //    movies = movies.Where(s => s.Title.Contains(searchString));
            //}

            //if (!string.IsNullOrEmpty(movieGenre))
            //{
            //    movies = movies.Where(x => x.Genre == movieGenre);
            //}
            var movies = _movieRepository.Find("", "");

            return View(movies);
        }

        // GET: /Movies/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Movie movie = db.Movies.Find(id);
            Movie movie = _movieRepository.FindById(id.Value);
            if (movie == null)
            {
                return HttpNotFound();
            }
            return View(movie);
        }


        public ActionResult DetailsPop(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Movie movie = db.Movies.Find(id);
            Movie movie = _movieRepository.FindById(id.Value);
            if (movie == null)
            {
                return HttpNotFound();
            }
            return View("DetailsPop", "_LayoutPop", movie);
        }


        // GET: /Movies/Create
        public ActionResult Create()
        {
            return View(new Movie
            {
                Genre = "Comedy",
                Price = 3.99M,
                ReleaseDate = DateTime.Now,
                Rating = "G",
                Title = "Ghotst Busters III"
            });
        }
        /*
public ActionResult Create()
{
    return View();
}

 */
        // POST: /Movies/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Title,ReleaseDate,Genre,Price,Rating")] Movie movie)
        {
            if (ModelState.IsValid)
            {
                //db.Movies.Add(movie);
                //db.SaveChanges();
                _movieRepository.Create(movie);
                return RedirectToAction("Index");
            }

            return View(movie);
        }

        // GET: /Movies/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Movie movie = db.Movies.Find(id);
            Movie movie = _movieRepository.FindById(id.Value);
            if (movie == null)
            {
                return HttpNotFound();
            }

            MovieEditModel m = new MovieEditModel
            {
                AllCategories = movie.MovieCategories.ToCheckBoxListSource(db.Categories),
                Title = movie.Title,
                Genre = movie.Genre,
                Link = movie.Link,
                Description = movie.Description,
                ReleaseDate = movie.ReleaseDate,
                Price = movie.Price
            }
        ;
            return View(m);
        }

        // POST: /Movies/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include = "ID,Title,ReleaseDate,Genre,Price,Rating")] Movie movie)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(movie).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View(movie);
        //}

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(MovieEditModel movieModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //Movie movie = db.Movies.FirstOrDefault(m => m.ID == movieModel.ID);
                    //Movie movie = _movieRepository.FindById(movieModel.ID);
                    //if (movie == null)
                    //{
                    //    return HttpNotFound($"Inable to find Movie with ID {movieModel.ID}");
                    //}

                    //movie.MovieCategories.UpdateCollectionFromModel(db.Categories, movieModel.CategoryIds);


                    //movie.Title = movieModel.Title;
                    //movie.Genre = movieModel.Genre;
                    //movie.Link = movieModel.Link;
                    //movie.Description = movieModel.Description;
                    //movie.ReleaseDate = movieModel.ReleaseDate;
                    //movie.Price = movieModel.Price;

                    //db.SaveChanges();
                    _movieRepository.Update(movieModel);
                    return RedirectToAction("Index");

                }
                return View(movieModel);
            }
            catch (ArgumentNullException anEx)
            {
                return HttpNotFound(anEx.Message);
            }
            
        }



        // GET: /Movies/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Movie movie = db.Movies.Find(id);
            Movie movie = _movieRepository.FindById(id.Value);
            if (movie == null)
            {
                return HttpNotFound();
            }
            return View(movie);
        }

        // POST: /Movies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            //Movie movie = db.Movies.Find(id);
            Movie movie = _movieRepository.FindById(id);
            if (movie == null)
            {
                return HttpNotFound();
            }
            _movieRepository.Remove(movie);
            
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
