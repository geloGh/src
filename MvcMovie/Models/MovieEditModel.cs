using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace MvcMovie.Models
{
    public class MovieEditModel : BaseEntity
    {

        [StringLength(60, MinimumLength = 3)]
        public string Title { get; set; }

        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ReleaseDate { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [Required]
        [StringLength(30)]
        public string Genre { get; set; }


        [StringLength(250)]
        [DataType(DataType.Url)]
        public string Link { get; set; }


        [Required]
        [StringLength(250)]
        public string Description { get; set; }

        [Range(0.1, 100000000)]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [StringLength(5)]
        public string Rating { get; set; }

        [DisplayName("Movie Categories")]
        public virtual IEnumerable<SelectListItem> AllCategories { get; set; }

        public virtual int[] CategoryIds { get; set; }

        public MovieEditModel()
        {
            AllCategories = new List<SelectListItem>();
        }
    }
}