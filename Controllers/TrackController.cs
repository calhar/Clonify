using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Clonify.Models;

namespace Clonify.Controllers
{
    [Route("api/tracks")]
    public class TrackController : Controller
    {
        private readonly ClonifyContext _context;
        public TrackController(ClonifyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Track> GetAll()
        {
            return _context.Tracks
                .Include(t => t.Album)
                .Include(t => t.Artist)
                .ToList();
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var track = _context.Tracks
                .Include(t => t.Album)
                .Where(t => t.Id == id)
                .FirstOrDefault();

            if (track == null)
            {
                return NotFound();
            }
            return new ObjectResult(track);
        }
    }
}