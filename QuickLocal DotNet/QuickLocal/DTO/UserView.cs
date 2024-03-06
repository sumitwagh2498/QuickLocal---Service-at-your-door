using System.ComponentModel.DataAnnotations;

public class UserView
{
    [Key]
    public string Id { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }

    public string Role { get; set; }
}
