import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plane',
  templateUrl: './add-plane.component.html',
  styleUrls: ['./add-plane.component.css']
})
export class AddPlaneComponent implements OnInit {

  addPlaneForm:FormGroup;
   submitted = false;
  constructor(private formBuilder:FormBuilder,private amsService:AMSService,private router:Router) { }

  ngOnInit() {
    this.addPlaneForm = this.formBuilder.group({

      'OwnerFirstName':new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
      'OwnerLastName':new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
      'OwnerContactNumber':new FormControl("",[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
      'OwnerEmail': new FormControl("",[Validators.required,Validators.email]),
      'PlaneType': new FormControl("",[Validators.required]),
      'PlaneCapacity':new FormControl("",[/*Validators.required,Validators.pattern("[0-9]*$"),*/Validators.maxLength(3)])
    })
  }
  addPlane(){
    this.submitted = true;
    
    /* console.log(this.addPlaneForm) */
    // stop here if form is invalid
     if (!this.addPlaneForm.invalid) {
  
    
    this.amsService.addPlane(this.addPlaneForm).subscribe(
      data => {
        console.log(data)
        
      }
    )
   
        this.router.navigateByUrl("adminsuccess");
     }
  }
   get f(){
     return this.addPlaneForm.controls;
   }
 
   onReset() {
     this.submitted = false;
     this.addPlaneForm.reset();
} 

}
