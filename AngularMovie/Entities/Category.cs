using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AngularMovie.Controllers;

namespace AngularMovie.Entities
{
    public class Category 
    {

        public virtual int Id { get; set; }

        [StringLength(50, MinimumLength = 3)]
        public string CategoryName { get; set; }

        public virtual IList<Film> Films { get; set; }


        public Category()
        {
            this.Films = new List<Film>();
        }

        public override string ToString()
        {
            return CategoryName;
        }
    }
}