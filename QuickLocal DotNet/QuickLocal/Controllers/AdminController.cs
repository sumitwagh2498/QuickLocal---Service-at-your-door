using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickLocal.DTO;
using QuickLocal.Data;
using Microsoft.AspNetCore.Authorization;


[Authorize(Roles = "Admin")]
public class AdminController : Controller
{
    private readonly ApplicationDbContext _context;

    public AdminController(ApplicationDbContext dbContext)
    {
        _context = dbContext;
    }

    // Display all users
    public IActionResult GetAllUsers()
    {
        var usersWithRoles = _context.UserView
            .FromSqlRaw("SELECT u.Id, u.FirstName, u.LastName, u.Email, u.PhoneNumber, r.Name AS Role FROM aspnetusers u " +
                        "JOIN aspnetuserroles ur ON u.Id = ur.UserId " +
                        "JOIN aspnetroles r ON ur.RoleId = r.Id")
            .Select(u => new UserView
            {
                Id = (u.Id as string) ?? null,
                Firstname = (u.Firstname as string) ?? null,
                Lastname = (u.Lastname as string) ?? null,
                Email = (u.Email as string) ?? null,
                PhoneNumber = (u.PhoneNumber as string) ?? null,
                Role = (u.Role as string) ?? null
            })
            .ToList();

        return View(usersWithRoles);
    }


    // Display user details
    public IActionResult UserDetails(string id)
    {
        var user = _context.UserView
            .FromSqlRaw("SELECT Id, FirstName, LastName, Email, PhoneNumber FROM aspnetusers WHERE Id = {0}", id)
            .Select(u => new UserView
            {
                Id = (u.Id as string) ?? null,
                Firstname = (u.Firstname as string) ?? null,
                Lastname = (u.Lastname as string) ?? null,
                Email = (u.Email as string) ?? null,
                PhoneNumber = (u.PhoneNumber as string) ?? null
            })
            .FirstOrDefault();

        if (user == null)
        {
            return NotFound();
        }

        return View(user);
    }

    // Create user
    [HttpGet]
    public IActionResult CreateUser()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreateUser(UserView user)
    {
        if (ModelState.IsValid)
        {
            // Perform necessary validations and save to the database
            // For simplicity, assume userView corresponds to the User entity
            _context.UserView.Add(user);
            _context.SaveChanges();

            return RedirectToAction(nameof(GetAllUsers));
        }

        return View(user);
    }

    // Update user
    [HttpGet]
    public IActionResult UpdateUser(string id)
    {
        var user = _context.UserView
            .FromSqlRaw("SELECT Id, FirstName, LastName, Email, PhoneNumber FROM aspnetusers WHERE Id = {0}", id)
            .Select(u => new UserView
            {
                Id = (u.Id as string) ?? null,
                Firstname = (u.Firstname as string) ?? null,
                Lastname = (u.Lastname as string) ?? null,
                Email = (u.Email as string) ?? null,
                PhoneNumber = (u.PhoneNumber as string) ?? null
            })
            .FirstOrDefault();

        if (user == null)
        {
            return NotFound();
        }

        return View(user);
    }

    [HttpPost]
    public IActionResult UpdateUser(UserView user)
    {
        if (ModelState.IsValid)
        {
            var existingUser = _context.UserView
                .FromSqlRaw("SELECT Id, FirstName, LastName, Email, PhoneNumber FROM aspnetusers WHERE Id = {0}", user.Id)
                .Select(u => new UserView
                {
                    Id = (u.Id as string) ?? null,
                    Firstname = (u.Firstname as string) ?? null,
                    Lastname = (u.Lastname as string) ?? null,
                    Email = (u.Email as string) ?? null,
                    PhoneNumber = (u.PhoneNumber as string) ?? null
                })
                .FirstOrDefault();

            if (existingUser == null)
            {
                return NotFound();
            }

           
            var updateSql = "UPDATE aspnetusers SET FirstName = {0}, LastName = {1}, Email = {2}, PhoneNumber = {3} WHERE Id = {4}";
            _context.Database.ExecuteSqlRaw(updateSql, user.Firstname, user.Lastname, user.Email, user.PhoneNumber, user.Id);

            return RedirectToAction(nameof(GetAllUsers));
        }

        return View(user);
    }


    // Delete user
    [HttpGet]
    public IActionResult DeleteUser(string id)
    {
        var user = _context.UserView
            .FromSqlRaw("SELECT Id, FirstName, LastName, Email, PhoneNumber FROM aspnetusers WHERE Id = {0}", id)
            .Select(u => new UserView
            {
                Id = (u.Id as string) ?? null,
                Firstname = (u.Firstname as string) ?? null,
                Lastname = (u.Lastname as string) ?? null,
                Email = (u.Email as string) ?? null,
                PhoneNumber = (u.PhoneNumber as string) ?? null
            })
            .FirstOrDefault();

        if (user == null)
        {
            return NotFound();
        }

        return View(user);
    }

    [HttpPost, ActionName("DeleteUser")]
    public IActionResult ConfirmDeleteUser(string id)
    {
        var userToDelete = _context.UserView
            .FromSqlRaw("SELECT Id, FirstName, LastName, Email, PhoneNumber FROM aspnetusers WHERE Id = {0}", id)
            .Select(u => new UserView
            {
                Id = (u.Id as string) ?? null,
                Firstname = (u.Firstname as string) ?? null,
                Lastname = (u.Lastname as string) ?? null,
                Email = (u.Email as string) ?? null,
                PhoneNumber = (u.PhoneNumber as string) ?? null
            })
            .FirstOrDefault();

        if (userToDelete == null)
        {
            return NotFound();
        }

       
        var deleteSql = "DELETE FROM aspnetusers WHERE Id = {0}";
        _context.Database.ExecuteSqlRaw(deleteSql, id);

        return RedirectToAction(nameof(GetAllUsers));
    }

}