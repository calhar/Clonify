using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Clonify.Models;

namespace Clonify.Controllers
{
    [Route("api/playlists")]
    public class PlaylistController : Controller
    {
        private readonly ClonifyContext _context;
        public PlaylistController(ClonifyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Playlist> GetAll()
        {
            return _context.Playlists
                .ToList();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _context.Playlists
                .Where(p => p.Id == id)
                .Include(p => p.Tracks)
                    .ThenInclude(pt => pt.Track)
                        .ThenInclude(t => t.Album)
                .Include(p => p.Tracks)
                    .ThenInclude(pt => pt.Track)
                        .ThenInclude(t => t.Artist)
                .FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}