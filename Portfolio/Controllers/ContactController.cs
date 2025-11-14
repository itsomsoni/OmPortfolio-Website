using System.Net;
using System.Net.Mail;
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
            string smtpServer = "smtp.gmail.com";
            int smtpPort = 587;
            string fromEmail = "soniom2002@gmail.com";
            string password = "lzae vqqk ubfw hjlk";

            var message = new MailMessage(fromEmail, "omsoniii180321@gmail.com", "Someone wants to connect.", $"Name: {request.Name}<br/>Email: {request.Email}<br/>Message: {request.Message}");
            message.IsBodyHtml = false;

            using (var client = new SmtpClient(smtpServer, smtpPort))
            {
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential(fromEmail, password);
                client.Send(message);
            }

            // For this example, we'll just return a success response.
            return Ok(new { message = "Your message has been received. Thank you!" });
        }
    }
}
