using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Clonify.Models;

namespace Clonify.Controllers
{
    [Route("api/artists")]
    public class ArtistController : Controller
    {
        private readonly ClonifyContext _context;
        public ArtistController(ClonifyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Artist> GetAll()
        {
            return _context.Artists.ToList();
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var item = _context.Artists
                .Where(a => a.Id == id)
                .FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpGet("{artistId:int}/albums")]
        public IEnumerable<Album> GetAlbums(int artistId)
        {
            var albums = _context.Albums
                .Include(a => a.Artist)
                .Where(a => a.ArtistId == artistId)
                .ToList();
            return albums;

        }
    }
}