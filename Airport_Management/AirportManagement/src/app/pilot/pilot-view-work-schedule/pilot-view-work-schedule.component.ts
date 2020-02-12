import { Component, OnInit } from '@angular/core';
import { AMSService } from 'src/app/ams.service';

@Component({
  selector: 'app-pilot-view-work-schedule',
  templateUrl: './pilot-view-work-schedule.component.html',
  styleUrls: ['./pilot-view-work-schedule.component.css']
})
export class PilotViewWorkScheduleComponent implements OnInit {

   // pilotworkschedule:Observable<any>
   pilotworkschedule:any[]
  constructor(private amsService:AMSService) { }

  ngOnInit() {
    console.log("ffff")
    this.amsService.getPilotworkscheduleview().subscribe(
      data=>{
      console.log(data)
      this.pilotworkschedule=data
      console.log(this.pilotworkschedule)
     this.pilotworkschedule=Array.of(this.pilotworkschedule);
      })
  }

}
