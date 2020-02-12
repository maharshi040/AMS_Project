import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';
import { RouterModule, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  adminRegisterForm: FormGroup;
  submitted = false;
  Myage:any;

  getAge(dateOfBirth:Date):number{
    //  var today = Date.now;
    //  var age = today.
    console.log(dateOfBirth);
    console.log("age");
      let today = new Date();
      let todayDate  = this.datepipe.transform(today, 'yyyy')
      var birthdate = new Date(dateOfBirth);
      let birthDay = this.datepipe.transform(birthdate,'yyyy')
      this.Myage = Number(todayDate) - Number(birthDay)
      let m = today.getMonth()-birthdate.getMonth();
      if(m<0 || (m==0 && today.getDate()< birthdate.getDate())){
        this.Myage--;
        }
        console.log(this.Myage);
        // this.adminRegisterForm.patchValue({age : this.Myage})
        this.adminRegisterForm.patchValue({age : this.Myage})
        return this.Myage;
  }
  

  constructor(private formBuilder: FormBuilder,private amsService:AMSService, private router:Router, private datepipe:DatePipe) {
    
   }
   roleAdmin:string='admin';

  ngOnInit() {
    this.adminRegisterForm=this.formBuilder.group({
            
            firstName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
            lastName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
            age:new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.max(60),Validators.min(20)]),
            gender:new FormControl( '', [Validators.required]),
            doB:new FormControl('',[Validators.required]),
            contactNumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
            altContactNumber:new FormControl('',[Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
            emailId: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[A-Za-z%]+[\\$#\\+{}:\\?\\.,~@\"]+[0-9]+$")])
    });
  }
  get f(){
    return this.adminRegisterForm.controls;
    
  }
  onAdminRegSubmit() {
    this.submitted = true;
    if(!this.adminRegisterForm.invalid)
    {
    console.log(this.adminRegisterForm)
    this.amsService.adminRegister(this.adminRegisterForm).subscribe(
      data => {
        console.log(data)
      }
    )
    
    this.router.navigateByUrl("success");
  }
  }
  onReset() {
    this.submitted = false;
    this.adminRegisterForm.reset();
}






}

