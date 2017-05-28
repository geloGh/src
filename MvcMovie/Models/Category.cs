using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Category : BaseEntity
    {
     

        [StringLength(50, MinimumLength = 3)]
        public virtual string CategoryName { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }


        public Category()
        {
            this.Movies = new HashSet<Movie>();
        }

        public override string ToString()
        {
            return CategoryName;
        }
    }
}