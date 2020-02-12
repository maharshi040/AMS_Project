import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AMSService } from 'src/app/ams.service';

@Component({
  selector: 'app-pilot-work-schedule',
  templateUrl: './pilot-work-schedule.component.html',
  styleUrls: ['./pilot-work-schedule.component.css']
})
export class PilotWorkScheduleComponent implements OnInit {

  pilotWorkSchduleForm: FormGroup;
  submitted = false;
  scheduledList:any;
  constructor(private formBuilder: FormBuilder,private amsService:AMSService, private router:Router) { }

  ngOnInit() {
    this.pilotWorkSchduleForm=this.formBuilder.group({
            
      pilotId: new FormControl('',[Validators.required]),
      dailySchedule: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      weeklySchedule: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      monthlySchedule: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*$")])      
});
      this.amsService.SchedulesPilot().subscribe(
  data => {
    console.log(data)
    this.scheduledList=data;
  }
)
  }
  workSchdule(){
    this.submitted = true;
    if(!this.pilotWorkSchduleForm.invalid)
    {
    console.log(this.pilotWorkSchduleForm)
    this.amsService.pilotWorkSchdule(this.pilotWorkSchduleForm).subscribe(
      data => {
        console.log(data)
      }
    )
   
    this.router.navigateByUrl("adminsuccess");
  }
  }
  get f()
  {
    return this.pilotWorkSchduleForm.controls
  }
  onReset() {
    this.submitted = false;
    this.pilotWorkSchduleForm.reset();
}

}
