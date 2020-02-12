import { Component, OnInit } from '@angular/core';
import { AMSService } from '../ams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private amsService:AMSService,private router: Router) { }
roleAdmin:string='admin';
roleManager:string='manager';
rolePilot:string='pilot';
 
  ngOnInit() {
    console.log("data");
  this.amsService.getData().subscribe(data=>{
   console.log(data);
  });
  }
  Admin()
  {
    this.router.navigateByUrl('/login/'+this.roleAdmin);
  }
  Manager()
  {
    this.router.navigateByUrl('/login/'+this.roleManager);
  }
  Pilot()
  {
    this.router.navigateByUrl('/login/'+this.rolePilot);
  }
}
