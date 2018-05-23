using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Clonify.Models
{
    public class Track
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int AlbumId { get; set; }
        [ForeignKey("AlbumId")]
        public virtual Album Album { get; set; }
        public int ArtistId { get; set; }
        [ForeignKey("ArtistId")]
        public virtual Artist Artist { get; set; }
        public int TrackNo { get; set; }
        public int DurationMs { get; set; }
        public string Location { get; set; }
    }
}