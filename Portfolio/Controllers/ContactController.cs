using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public IActionResult SubmitContactForm([FromBody] Models.ContactFormRequest request)
        {
            // Here you would typically process the contact form submission,
            // such as sending an email or storing the message in a database.
            // For this example, we'll just return a success response.
            return Ok(new { message = "Your message has been received. Thank you!" });
        }
    }
}
