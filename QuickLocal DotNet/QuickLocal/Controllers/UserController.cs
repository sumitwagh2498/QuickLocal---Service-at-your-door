using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickLocal.Data;
using QuickLocal.Models;

namespace QuickLocal.Controllers
{
    [Authorize(Roles = "User")]

    public class UserController : Controller
    {
        private readonly ApplicationDbContext _db;

        public UserController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult ViewServices(string pinCode)
        {
            var services = string.IsNullOrEmpty(pinCode) ? _db.AddServices.ToList() : _db.AddServices.Where(s => s.PinCode == pinCode).ToList();
            return View(services);
        }

    }
}
