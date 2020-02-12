import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-plane',
  templateUrl: './edit-plane.component.html',
  styleUrls: ['./edit-plane.component.css']
})
export class EditPlaneComponent implements OnInit {

  editPlaneForm:FormGroup;
  submitted = false;
  id:any;
  planeDetails
  constructor( private route: ActivatedRoute,private formBuilder:FormBuilder,private amsService:AMSService,private router:Router) { }

  ngOnInit() {
    this.editPlaneForm = this.formBuilder.group({
      'OwnerFirstName':new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
      'OwnerLastName':new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
      'OwnerContactNumber':new FormControl("",[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
      'OwnerEmail': new FormControl("",[Validators.required,Validators.email]),
      'PlaneType': new FormControl("",[Validators.required]),
      'PlaneCapacity':new FormControl("",[/*Validators.required,Validators.pattern("[0-9]*$"),*/Validators.maxLength(3)])
    })
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.planeDetails =this.amsService.getPlaneDetailsID(this.id)
    this.amsService.getPlaneDetailsID(this.id).subscribe(
      data=>{
        console.log(data)
        this.editPlaneForm = this.formBuilder.group({
          'OwnerFirstName':new FormControl(data['ownerFirstName'],[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
          'OwnerLastName':new FormControl(data['ownerLastName'],[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
          'OwnerContactNumber':new FormControl(data['ownerContactNumber'],[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]),
          'OwnerEmail': new FormControl(data['ownerEmail'],[Validators.required,Validators.email]),
          'PlaneType': new FormControl(data['planeType'],[Validators.required]),
          'PlaneCapacity':new FormControl(data['planeCapacity'],[/*Validators.required,Validators.pattern("[0-9]*$"),*/Validators.maxLength(3)])
        })
      })
  }
  get f(){
    return this.editPlaneForm.controls;
  }
  editPlane(){

    this.submitted = true;
    if(!this.editPlaneForm.invalid)
    {
    console.log(this.editPlaneForm)
    this.amsService.updatePlaneDetails(this.id,this.editPlaneForm).subscribe(
      data => {
        console.log(data)
      }
    )
    this.router.navigateByUrl("viewplane");


  }
  }
}
