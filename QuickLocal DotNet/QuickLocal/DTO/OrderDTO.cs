using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
namespace QuickLocal.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
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
        public string AvailableDate { get; set; }

        [Required]
        [Display(Name = "Available Time")]
        [DataType(DataType.Time)]
        public string AvailableTime { get; set; }

        [Required]
        public string Status { get; set; }
    }
}
