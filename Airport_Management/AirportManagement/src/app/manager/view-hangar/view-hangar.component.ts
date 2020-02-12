import { Component, OnInit } from '@angular/core';
import { AMSService } from 'src/app/ams.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-hangar',
  templateUrl: './view-hangar.component.html',
  styleUrls: ['./view-hangar.component.css']
})
export class ViewHangarComponent implements OnInit {

  City: any 
  hangarDetails:Observable<any[]>
  planeId:any
  allotHangerForm:FormGroup
  hangarId:any
  submitted = false;

  constructor(private amsService:AMSService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    

      this.hangarDetails = this.amsService.getHangarDetails();
      this.amsService.getPlaneID("Not Allotted").subscribe(
      data=>{
        console.log(data)
        this.planeId =data
        console.log(this.planeId)

      });
      // this.planeId =Array.of(this.planeId)
      
      
    this.allotHangerForm= this.formbuilder.group({
      'hangarId': new FormControl('',[Validators.required]),
      'planeId': new FormControl('',[Validators.required])      
    })


  }

  setHangarId(id:any){
    console.log(id)
    this.hangarId = id
  }
  updateHangarSubmit(){
    console.log("inside fn")
    this.submitted = true;
    console.log(this.allotHangerForm)
    this.amsService.updateHangarSubmit(this.allotHangerForm.value.planeId,this.hangarId).subscribe(
      data=>{
        console.log(data)
        this.router.navigateByUrl("success");
      }
    )
    this.hangarDetails = this.amsService.getHangarDetails();
      this.amsService.getPlaneID("Not Allotted").subscribe(
      data=>{
        console.log(data)
        this.planeId =data
        console.log(this.planeId)

      });
    // this.router.navigateByUrl("success");
  
  }

}
