import { Component, OnInit } from '@angular/core';
import { AMSService } from 'src/app/ams.service';

@Component({
  selector: 'app-plane-view',
  templateUrl: './plane-view.component.html',
  styleUrls: ['./plane-view.component.css']
})
export class PlaneViewComponent implements OnInit {

  planeDetails:any[]
  constructor(private amsService:AMSService) { }

  ngOnInit() {
    this.amsService.getPlaneDetails().subscribe(
      data=>{
      console.log(data)
      this.planeDetails=data
      console.log(this.planeDetails)
     this.planeDetails=Array.of(this.planeDetails);
      })
  }
  planeView(){
    console.log("inside fn");
  }
}
