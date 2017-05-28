using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace AngularMovie.Entities
{
    public class Film 
    {
        public virtual int Id { get; protected set; }

        public virtual string DateFormatted { get; set; }

        [StringLength(60, MinimumLength = 3)]
        public virtual string Title { get; set; }

        [StringLength(250)]
        [DataType(DataType.Url)]
        public virtual string Link { get; set; }


        [DisplayName("Movie Categories")]
        public virtual IList<Category> FilmCategories { get; protected set; }


        public Film()
        {
            FilmCategories = new List<Category>();
        }

        public virtual void AddCategory(Category cat)
        {
            cat.Films.Add(this);
            FilmCategories.Add(cat);
        }
    }
}