import react, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the browser from refreshing the page
    console.log("Submitting:", formData);

    // ** SOON: This is where we will add the code to call your .NET API **

    const apiURL =
      "https://omsoni-api-portfolio-czhphrfjfzbkg6g7.centralindia-01.azurewebsites.net/api/Contact";
    try {
      const response = await axios.post(apiURL, formData);

      console.log("API Response:", response.data);
      alert("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contact" className="form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
