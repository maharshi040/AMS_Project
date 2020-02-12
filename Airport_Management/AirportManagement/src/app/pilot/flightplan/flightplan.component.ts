import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AMSService } from 'src/app/ams.service';
import { Router } from '@angular/router';
import { plane } from './plane';

@Component({
  selector: 'app-flightplan',
  templateUrl: './flightplan.component.html',
  styleUrls: ['./flightplan.component.css']
})
export class FlightplanComponent implements OnInit {
  addFlightPlanForm:FormGroup;
  submitted=false;
  PlanesList:plane[];

  constructor(private formBuilder:FormBuilder,private amsService:AMSService,private router:Router) { }


  ngOnInit() {
    this.amsService.getFlightPlanAllotedHanger().subscribe(
      data=>{
        console.log(data)
        this.PlanesList=data
        console.log(this.PlanesList)
  }
    );
    console.log(this.PlanesList)
    this.addFlightPlanForm= this.formBuilder.group({
      'flightId':new FormControl('',[Validators.required]),
      'DepartureLocation':new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      'Waypoints':new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      'EstimatedTimeOfArrival': new FormControl('',[Validators.required,Validators.pattern("[0-9]*$")]),
      'DestinationLocation' : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      'AlternateAirports' : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      'AircraftInformation': new FormControl('',[Validators.required]),
      'PilotsInformation': new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")])
      

})
}
addFlightPlan()
  {
    this.submitted=true;
    if(!this.addFlightPlanForm.invalid)
    {
      console.log(this.addFlightPlanForm);
      this.amsService.addFlightPlan(this.addFlightPlanForm).subscribe(
        data=>{
          console.log(data);
        }
      )
      
    this.router.navigateByUrl("flightplansuccess");
    }
  }

  get f()
  {
    return this.addFlightPlanForm.controls;
  }
  onReset()
  {
    this.submitted=false;
    this.addFlightPlanForm.reset();

  }


}