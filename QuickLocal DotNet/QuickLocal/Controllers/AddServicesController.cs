using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using QuickLocal.Data;
using QuickLocal.Models;

namespace QuickLocal.Controllers
{
    [Authorize(Roles = "Service Provider")]
    public class AddServicesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AddServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: AddServices
        public async Task<IActionResult> Index()
        {
              return _context.AddServices != null ? 
                          View(await _context.AddServices.ToListAsync()) :
                          Problem("Entity set 'ApplicationDbContext.AddServices'  is null.");
        }

        // GET: AddServices/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.AddServices == null)
            {
                return NotFound();
            }

            var addService = await _context.AddServices
                .FirstOrDefaultAsync(m => m.Id == id);
            if (addService == null)
            {
                return NotFound();
            }

            return View(addService);
        }

        // GET: AddServices/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: AddServices/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,NameOfProvider,Phone,Email,Services,Address,City,PinCode")] AddService addService)
        {
            if (ModelState.IsValid)
            {
                _context.Add(addService);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(addService);
        }

        // GET: AddServices/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.AddServices == null)
            {
                return NotFound();
            }

            var addService = await _context.AddServices.FindAsync(id);
            if (addService == null)
            {
                return NotFound();
            }
            return View(addService);
        }

        // POST: AddServices/Edit/5
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,NameOfProvider,Phone,Email,Services,Address,City,PinCode")] AddService addService)
        {
            if (id != addService.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(addService);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AddServiceExists(addService.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(addService);
        }

        // GET: AddServices/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.AddServices == null)
            {
                return NotFound();
            }

            var addService = await _context.AddServices
                .FirstOrDefaultAsync(m => m.Id == id);
            if (addService == null)
            {
                return NotFound();
            }

            return View(addService);
        }

        // POST: AddServices/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.AddServices == null)
            {
                return Problem("Entity set 'ApplicationDbContext.AddServices'  is null.");
            }
            var addService = await _context.AddServices.FindAsync(id);
            if (addService != null)
            {
                _context.AddServices.Remove(addService);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AddServiceExists(int id)
        {
          return (_context.AddServices?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
