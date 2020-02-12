import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AMSService } from '../ams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactusForm: FormGroup;
     submitted = false;
     contactUs : any;
  constructor(private formBuilder: FormBuilder,private amsService:AMSService,private router:Router) { }

  ngOnInit() {
    this.contactusForm=this.formBuilder.group({
            
      firstName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z]*$")]),
      lastName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z]*$")]),
      email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z]*@[a-zA-Z][a-zA-Z]*.com$")]),
      comments: new FormControl('', [Validators.required,Validators.minLength(10)])
});
  }
  get f(){
    return this.contactusForm.controls;
    
  }
  contactusSubmit() {
    this.submitted = true;
    if(!this.contactusForm.invalid)
    {
    console.log(this.contactusForm)
    // stop here if form is invalid
    // if (this.managerRegisterForm.invalid) {
    //     return;
    // }
    this.amsService.contactus(this.contactusForm).subscribe(
      data => {
        console.log(data)
        this.contactUs=data
      }
    )
    alert('FEEDBACK SUBMITTED SUCCESSFULLY');
    this.router.navigateByUrl("home");
    }
  }

  onReset() {
    this.submitted = false;
    this.contactusForm.reset();
}


}


