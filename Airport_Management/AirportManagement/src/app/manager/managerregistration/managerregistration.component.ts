import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';
import { Route, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-managerregistration',
  templateUrl: './managerregistration.component.html',
  styleUrls: ['./managerregistration.component.css']
})
export class ManagerregistrationComponent implements OnInit {
  managerRegisterForm: FormGroup;
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
       
        this.managerRegisterForm.patchValue({age : this.Myage})
        return this.Myage;
  }
  

  constructor(private formBuilder: FormBuilder,private amsService:AMSService,private router:Router,private datepipe:DatePipe) { }
roleManager:string='manager';
  ngOnInit() {
    this.managerRegisterForm=this.formBuilder.group({
            
            firstName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
            lastName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
            age:new FormControl('',[Validators.required,Validators.pattern("[0-9]*$")]),
            gender:new FormControl( '', [Validators.required]),
            doB:new FormControl('',[Validators.required]),
            contactNumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
            altContactNumber:new FormControl('',[Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
            emailId: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[A-Za-z%]+[\\$#\\+{}:\\?\\.,~@\"]+[0-9]+$")])
    });
  }
  get f(){
    return this.managerRegisterForm.controls;
    
  }
  onManagerRegSubmit() {
    this.submitted = true;
    if(!this.managerRegisterForm.invalid)
    {
    console.log(this.managerRegisterForm)
    // stop here if form is invalid
    // if (this.managerRegisterForm.invalid) {
    //     return;
    // }
    this.amsService.managerRegister(this.managerRegisterForm).subscribe(
      data => {
        console.log(data)
      }
    )
    this.router.navigateByUrl("success");
    }
  }

  onReset() {
    this.submitted = false;
    this.managerRegisterForm.reset();
}

}
