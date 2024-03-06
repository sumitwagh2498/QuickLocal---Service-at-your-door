using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickLocal.Data;
using QuickLocal.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickLocal.Controllers
{
    public class ServiceBookingsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ServiceBookingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /ServiceBookings/Create
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(ServiceBooking serviceBooking)
        {
            serviceBooking.Status = "Booked!";
            try
            {
                if (ModelState.IsValid)
                {
                    _context.ServiceBookings.Add(serviceBooking);
                    _context.SaveChanges();

                    ViewBag.Message = "Booking created successfully!";
                    return RedirectToAction("Index");
                }

                return View(serviceBooking);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                ViewBag.ErrorMessage = "An error occurred while processing your request.";
                return View(serviceBooking);
            }
        }

        // GET: /ServiceBookings
        public IActionResult Index(int? pageNumber)
        {
            const int pageSize = 10;
            var serviceBookings = _context.ServiceBookings.ToList();

            var paginatedBookings = serviceBookings.Skip((pageNumber ?? 1 - 1) * pageSize).Take(pageSize).ToList();

            ViewBag.PageNumber = pageNumber ?? 1;
            ViewBag.TotalPages = (int)Math.Ceiling(serviceBookings.Count() / (double)pageSize);



            return View(serviceBookings);
        }

        public async Task<IActionResult>  BookingUpdateBySp(int id)
        {
            ServiceBooking serviceBooking = await _context.ServiceBookings.FindAsync(id);

            if (serviceBooking == null)
            {
                return NotFound();
            }

            return View(serviceBooking);
        }
        // POST: ServiceBookings/UpdateStatus
        [HttpPost]
        public IActionResult UpdateStatus(int serviceBookingId, int statusId)
        {
            var serviceBooking = _context.ServiceBookings.Find(serviceBookingId);
            if (serviceBooking != null)
            {
                serviceBooking.Status = GetStatusName(statusId);
                _context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        private string GetStatusName(int statusId)
        {
            switch (statusId)
            {
                case 1:
                    return "Reject";
                case 2:
                    return "In Progress";
                case 3:
                    return "Successfully Done";
                default:
                    return "";
            }
        }
    }
}
