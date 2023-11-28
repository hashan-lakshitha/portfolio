import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  form: FormGroup =this.fb.group({

    from_name: "",
    to_name: "Admin",
    from_email: "",
    phone: "",
    subject: "",
    message: "",

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }


async send(){
  emailjs.init('wYJeAZUwSEm8-phnE');
  let response = await emailjs.send("service_5j1nfx8","template_l1q43uc",{
    from_name: this.form.value.form_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    phone: this.form.value.phone,
    subject: this.form.value.subject,
    message: this.form.value.message,
    });

    alert('Maessage has been sent!');
    this.form.reset();
}


}


