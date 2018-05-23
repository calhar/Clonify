using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Clonify.Models
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}