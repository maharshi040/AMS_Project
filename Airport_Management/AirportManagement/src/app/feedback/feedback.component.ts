import { Component, OnInit } from '@angular/core';
import { AMSService } from '../ams.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public amsService:AMSService) { }
  feedback:any;
  ngOnInit() {
    this.amsService.getFeedBack().subscribe(
      data => {
        console.log(data)
        this.feedback=data
    })
  }

}
