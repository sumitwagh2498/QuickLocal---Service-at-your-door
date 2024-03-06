using System;
using System.ComponentModel.DataAnnotations;

namespace QuickLocal.Models
{
    public class ServiceBooking
    {
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [Display(Name = "Pin Code")]
        public string PinCode { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Available Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime AvailableDate { get; set; }

        [Required]
        [Display(Name = "Available Time")]
        [DataType(DataType.Time)]
        public TimeSpan AvailableTime { get; set; }

       
        public string Status { get; set; }
    }
}
