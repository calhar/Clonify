using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Clonify.Models
{
    public class Playlist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<PlaylistTrack> Tracks { get; set; }
    }

    public class PlaylistTrack
    {
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime AddedAt { get; set; } = DateTime.UtcNow;
        public String AddedBy { get; set; }
        public int PlaylistId { get; set; }
        
        [ForeignKey("PlaylistId")]
        public virtual Playlist Playlist { get; set; }
        public int TrackId { get; set; }
        
        [ForeignKey("TrackId")]
        public virtual Track Track { get; set; }
    }
}