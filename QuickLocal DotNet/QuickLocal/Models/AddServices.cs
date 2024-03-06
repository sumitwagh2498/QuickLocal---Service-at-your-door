using System.ComponentModel.DataAnnotations;

namespace QuickLocal.Models
{
    public class AddService
    {
        [Key]
        public int Id { get; set; }
        public string NameOfProvider { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string Services { get; set; }
    }
}
