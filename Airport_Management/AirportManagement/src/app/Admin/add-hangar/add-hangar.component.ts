import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-hangar',
  templateUrl: './add-hangar.component.html',
  styleUrls: ['./add-hangar.component.css']
})
export class AddHangarComponent implements OnInit {
  addHangarForm:FormGroup;
  submitted=false;
  Managers
    constructor(private formBuilder:FormBuilder,private amsService:AMSService,private router:Router) { }

  ngOnInit() {
    this.amsService.getManagers().subscribe(
      data=>{
        this.Managers = data
        console.log(this.Managers)
        this.addHangarForm = this.formBuilder.group({
      'ManagerId': new FormControl('',[Validators.required,Validators.pattern("[0-9]*$")]),
      'ManagerAddressLine1': new FormControl('',[Validators.required]),
      'ManagerAddressLine2': new FormControl('',[Validators.required]),
      'City': new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]*$")]),
      'State' : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]*$")]),
      'ZipCode':new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(6),Validators.maxLength(6)]),
      'Availability' : new FormControl('',[Validators.required]) 
        })
        console.log(this.addHangarForm.value)
      }
    )
    this.addHangarForm = this.formBuilder.group({
      'ManagerId': new FormControl('',[Validators.required,Validators.pattern("[0-9]*$")]),
      'ManagerAddressLine1': new FormControl('',[Validators.required]),
      'ManagerAddressLine2': new FormControl('',[Validators.required]),
      'City': new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]*$")]),
      'State' : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]*$")]),
      'ZipCode':new FormControl('',[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(6),Validators.maxLength(6)]),
      'Availability' : new FormControl('',[Validators.required]) 
    })

    
    }
    addHangar()
    {
      this.submitted=true;
      if(!this.addHangarForm.invalid)
      {
        console.log(this.addHangarForm);
        this.amsService.addhangar(this.addHangarForm).subscribe(
         data =>{
           console.log(data)
           
         }
        )
        
         this.router.navigateByUrl("adminsuccess");
      }
    }

    get f()
    {
      return this.addHangarForm.controls;

    }
    onReset()
    {
      this.submitted=false;
      this.addHangarForm.reset();
    }


}
