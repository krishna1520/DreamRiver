import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  serviceID = 'service_zoth9wd';
  templateID = 'template_tqy3j2m';
  userID = 'mnj0ujhQ-l6OeH3wx';

  sendEmail(form: any) {
    if (form.valid) {
      // Make sure the property names match your EmailJS template placeholders
      const params = {
        name: form.value.name,       // Ensure this matches {{name}} in your template
        mobile: form.value.mobile,   // Ensure this matches {{mobile}} in your template
        message: form.value.message  // Ensure this matches {{message}} in your template
      };
        console.log(params);
      emailjs.send(this.serviceID, this.templateID, params, this.userID)
        .then((result: EmailJSResponseStatus) => {
          alert('Email sent successfully!');
          form.reset(); // Reset the form after sending
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send email. Please try again.');
        });
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
