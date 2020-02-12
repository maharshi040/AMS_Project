import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pilotregistration',
  templateUrl: './pilotregistration.component.html',
  styleUrls: ['./pilotregistration.component.css']
})
export class PilotregistrationComponent implements OnInit {

  pilotRegisterForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private amsService:AMSService,private router:Router) { }
rolePilot:string='pilot';
  ngOnInit() {
    this.pilotRegisterForm=this.formBuilder.group({
            
      licenseNumber: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]+[0-9 ]*$"),Validators.minLength(8),Validators.maxLength(8)]),
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*$')]),
      state: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*$')]),
      zipcode:new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(6),Validators.minLength(6)]),
      ssn:new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(9),Validators.maxLength(9)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[A-Za-z%]+[\\$#\\+{}:\\?\\.,~@\"]+[0-9]+$")])
    });
  }
  get f(){
    return this.pilotRegisterForm.controls;
    
  }
  onPilotRegSubmit()   {
    this.submitted = true;

    
     if(!this.pilotRegisterForm.invalid){
    console.log(this.pilotRegisterForm)
    this.amsService.pilotRegister(this.pilotRegisterForm).subscribe(
      data => {
        console.log(data)
      }
    )
    this.router.navigateByUrl("success");
    
  }
  }

  onReset() {
    this.submitted = false;
    this.pilotRegisterForm.reset();
  }
}
