using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace PSAngularGettingStarted.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetProducts()
        {            
            return Ok(new { productId = "8", productName = "Saw", productCode = "TBX-0022", releaseDate = "May 15, 2016", description = "15-inch steel blade hand saw", price = "11.55", starRating = "3.7", imageUrl = "mm" });
        }   
    }
}
