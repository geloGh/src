using FluentNHibernate.Mapping;
using MvcMovie.Models;

namespace MvcMovie.Services.nHibernate
{
    public class MovieMap : ClassMap<Movie>
    {

        public MovieMap()
        {
            Id(x => x.ID);
            Map(x => x.Title);
            Map(x => x.Link);
            HasManyToMany(x => x.MovieCategories)
                .Cascade.All()
                .Table("MovieCategories");
        }
    }
}
