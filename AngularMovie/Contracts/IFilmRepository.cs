using System.Collections.Generic;
using AngularMovie.Entities;

namespace AngularMovie.Contracts
{
    public interface IFilmRepository
    {
      
        void Create(Film movie);

        void Remove(Film movie);

        void Update(Film movieModel);

        Film FindById(int id);

        IList<Film> Load(int page,  int pageLength, string searchString);
    }
}