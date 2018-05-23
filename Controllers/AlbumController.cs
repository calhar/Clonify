using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Clonify.Models;

namespace Clonify.Controllers
{
    [Route("api/albums")]
    public class AlbumController : Controller
    {
        private readonly ClonifyContext _context;
        public AlbumController(ClonifyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Album> GetAll()
        {
            return _context.Albums
                .Include(a => a.Artist)
                .ToList();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _context.Albums
                .Include(a => a.Artist)
                .Include(a => a.Tracks)
                .Where(a => a.Id == id)
                .FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}