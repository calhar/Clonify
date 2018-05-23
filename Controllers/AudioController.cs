using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Clonify.Models;

namespace Clonify.Controllers
{
    [Route("api/audio")]
    public class AudioController : Controller
    {
        private readonly ClonifyContext _context;
        public AudioController(ClonifyContext context)
        {
            _context = context;
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

            var buff = new byte[0];
            var location = track.Location;

            using (var fs = new FileStream(location, FileMode.Open, FileAccess.Read))
            {
                var br = new BinaryReader(fs);
                long numBytes = new FileInfo(location).Length;
                buff = br.ReadBytes((int) numBytes);
            }
            return File(buff, @"application/octet-stream");
        }
    }
}