using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Movie : BaseEntity
    {

        [StringLength(60, MinimumLength = 3)]
        public virtual string Title { get; set; }

        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public virtual DateTime ReleaseDate { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [Required]
        [StringLength(30)]
        public virtual string Genre { get; set; }


        [StringLength(250)]
        [DataType(DataType.Url)]
        public virtual string Link { get; set; }


        [Required]
        [StringLength(250)]
        public virtual string Description { get; set; }

        [Range(0.1, 100000000)]
        [DataType(DataType.Currency)]
        public virtual decimal Price { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [StringLength(5)]
        public virtual string Rating { get; set; }

        [DisplayName("Movie Categories")]
        public virtual ICollection<Category> MovieCategories { get; set; }

        
        //public Movie()
        //{
        //    MovieCategories = new HashSet<Category>();
        //}
    }
}
