using System.Collections.Generic;
using MvcMovie.Models;

namespace MvcMovie.Contract.Services
{
    public interface IMovieRepository
    {
        List<string> LoadGenres();
        void Create(Movie movie);

        void Remove(Movie movie);

        void Update(MovieEditModel movieModel);

        Movie FindById(int id);

        IList<Movie> Find(string movieGenre, string searchString);
    }
}