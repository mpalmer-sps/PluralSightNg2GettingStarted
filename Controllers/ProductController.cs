using Microsoft.AspNetCore.Mvc;
using PSAngularGettingStarted.Shared;
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
        public IEnumerable<Product> GetProducts()
        {
            // product 8
            Product product1 = new Product();
            product1.ProductId = 8;
            product1.ProductName = "Saw";
            product1.ProductCode = "TBX-0022";
            product1.ReleaseDate = "May 15, 2016";
            product1.Description = "15-inch steel blade hand saw";
            product1.Price = 11.55;
            product1.StarRating = "3.7";
            product1.ImageUrl = "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png";

            // product
            Product product2 = new Product();
            product2.ProductId = 1;
            product2.ProductName = "Leaf Rake";
            product2.ProductCode = "GDN-0011";
            product2.ReleaseDate = "March 19, 2016";
            product2.Description = "Leaf rake with 48-inch wooden handle.";
            product2.Price = 19.95;
            product2.StarRating = "3.2";
            product2.ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png";

            // product
            Product product3 = new Product();
            product3.ProductId = 5;
            product3.ProductName = "Hammer";
            product3.ProductCode = "TBX-0048";
            product3.ReleaseDate = "May 21, 2016";
            product3.Description = "Curved claw steel hammer";
            product3.Price = 8.9;
            product3.StarRating = "4.8";
            product3.ImageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png";

            Product product4 = new Product();
            product4.ProductId = 2;
            product4.ProductName = "Garden Cart";
            product4.ProductCode = "GDN-0023";
            product4.ReleaseDate = "March 18, 2016";
            product4.Description = "15 gallon capacity rolling garden cart";
            product4.Price = 32.99;
            product4.StarRating = "4.2";
            product4.ImageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png";

            Product product5 = new Product();
            product5.ProductId = 10;
            product5.ProductName = "Video Game Controller";
            product5.ProductCode = "GMG-0042";
            product5.ReleaseDate = "October 15, 2015";
            product5.Description = "Standard two-button video game controller";
            product5.Price = 35.95;
            product5.StarRating = "4.6";
            product5.ImageUrl = "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png";


            var listOfProducts = new List<Product>() { product1, product2, product3, product4, product5 };
            return listOfProducts;
        }
    }
}
