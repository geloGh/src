using FluentNHibernate.Mapping;
using MvcMovie.Models;

namespace MvcMovie.Services.nHibernate
{
    public class CategoryMap : ClassMap<Category>
    {

        public CategoryMap()
        {
            Id(x => x.ID);
            Map(x => x.CategoryName);
            
            HasManyToMany(x => x.Movies)
                .Cascade.All()
                .Inverse()
                .Table("MovieCategories");
        }
    }
}