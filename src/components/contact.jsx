import React, { useState } from "react";
import './contactus.css'
import img1 from '/Images/Group121.png'
import img2 from '/Images/contactus1.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone Number must be 10 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Invalid Email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission here, e.g., send data to the server or perform other actions.
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
      // Reset the form after successful submission
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="Wrapper">
        <div className="chead">
            <div className="arrow"><img src={img1} alt="" /></div>
            <div className="text">ROBOCRAFT</div>
        </div>
        <div className="cbody">
            <div className="title">
                <div className="t1">Any Queries? Let us know</div>
                <div className="t2">We will get back to you soon !</div>
            </div>
            <div className="formwrap">
            <div className="cform">
            <form onSubmit={handleSubmit}>
            <div className="itm">
                <label htmlFor="fullName">Full Name</label>
                <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                />
                {formErrors.fullName && <span className="error">{formErrors.fullName}</span>}
            </div>
            <div className="itm">
                <label htmlFor="phone">Phone Number</label>
                <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                />
                {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </div>
            <div className="itm">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="itm">
                <label htmlFor="message">Comment or Message</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                />
                {formErrors.message && <span className="error">{formErrors.message}</span>}
            </div>
            <button type="submit"><h5>Submit</h5></button>
            </form>
            </div>
            <div className="cpic">
            <div><img src={img2} alt="" /></div>
            </div>
            </div>

        </div>
    </div>
  );
};

export default Contact;
