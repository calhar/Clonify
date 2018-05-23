using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Clonify.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Type { get; set; }
        public int ArtistId { get; set; }
        [ForeignKey("ArtistId")]
        public virtual Artist Artist { get; set; }
        public virtual List<Track> Tracks { get; set; }
    }
}