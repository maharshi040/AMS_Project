import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AMSService } from 'src/app/ams.service';
import { RouterLink } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  isManager : boolean;
  ManagerStatus:boolean=false;
  PilotStatus:boolean=false;
  managerRegistrationRequests:any[]
  pilotRegistrationRequests:any[]
  message:string
  requests:string;
  rejectManager:FormGroup;
  rejectPilot:FormGroup;
  mEmail
  licenceNo
  constructor(private userService:AMSService,public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.isManager = true;
    this.userService.getManagerRegistrations().subscribe(
      data=>{
      console.log("hello world")
      this.managerRegistrationRequests=data
     this.managerRegistrationRequests=Array.of(this.managerRegistrationRequests);
      })
     this.userService.getPilotRegistrations().subscribe(
      data=>{
      console.log(data)
      this.requests=data['message']
      this.pilotRegistrationRequests=data
     this.pilotRegistrationRequests=Array.of(this.pilotRegistrationRequests); 

      })
      
      this.rejectManager=this.formBuilder.group({
            
        Managercomments: new FormControl('', [Validators.required])
   })
   this.rejectPilot=this.formBuilder.group({
            
    Pilotcomments: new FormControl('', [Validators.required])
   })
      
    
    
   }
   RejectButtonClick(){

    this.userService.managerRejectStatus(this.mEmail,false,this.rejectManager.value.Managercomments).subscribe(
      data=>{
        this.message=JSON.parse(JSON.stringify(data))['message']
        console.log(this.message)
        if(this.message=="Manager Rejected")
        {
          console.log("rejected");
          this.userService.getManagerRegistrations().subscribe(
            data=>{
            console.log(data)
            this.managerRegistrationRequests=data
           this.managerRegistrationRequests=Array.of(this.managerRegistrationRequests);
            })
            this.ManagerStatus = false
        }
      })
  }
   ManagerClick()
  {
    this.isManager = true;
    console.log(this.managerRegistrationRequests);
    
  }
  pilotClick()
  {
    this.isManager = false;
    console.log(this.pilotRegistrationRequests);
  }



  managerApprove(mEmail:string){  
    this.userService.managerApproveStatus(mEmail,true,null).subscribe(
      data => {
        this.message = JSON.parse(JSON.stringify(data))['message']
        console.log(this.message)
        if(this.message == "Manager Approved")
        {
          console.log("approved");
         
         this.userService.getManagerRegistrations().subscribe(
          data=>{
          console.log(data)
          this.managerRegistrationRequests=data
         this.managerRegistrationRequests=Array.of(this.managerRegistrationRequests);
          })
        }
        })
    }

    // managerReject(mEmail:string)
    // {
    //   this.userService.managerRejectStatus(mEmail,false).subscribe(
    //     data=>{
    //       this.message=JSON.parse(JSON.stringify(data))['message']
    //       console.log(this.message)
    //       if(this.message=="Manager Rejected")
    //       {
    //         console.log("rejected");
           
    //         this.userService.getManagerRegistrations().subscribe(
    //           data=>{
    //           console.log(data)
    //           this.managerRegistrationRequests=data
    //          this.managerRegistrationRequests=Array.of(this.managerRegistrationRequests);
    //           })

    //       }
    //     })
    // }
    managerReject(mEmail:string)
    {
      this.ManagerStatus=true;
      this.PilotStatus = false;
      this.mEmail = mEmail;

      
    }
    pilotApprove(license:string)
    {
      this.userService.pilotApproveStatus(license,true,null).subscribe(
        data=>{
          this.message=JSON.parse(JSON.stringify(data))['message']
          console.log(this.message)
          if(this.message=="Pilot Approved")
          {
            console.log("Approved");
            


            this.userService.getPilotRegistrations().subscribe(
              data=>{
              console.log(data)
              this.pilotRegistrationRequests=data
             this.pilotRegistrationRequests=Array.of(this.pilotRegistrationRequests); 
        
              })




          }
        })
    }



    // pilotReject(license:string)
    // {
    //   this.userService.pilotRejectStatus(license,false).subscribe(
    //     data=>{
    //       this.message=JSON.parse(JSON.stringify(data))['message']
    //       console.log(this.message)
    //       if(this.message=="Pilot Rejected")
    //       {
    //         console.log("rejected");
           


    //         this.userService.getPilotRegistrations().subscribe(
    //           data=>{
    //           console.log(data)
    //           this.pilotRegistrationRequests=data
    //          this.pilotRegistrationRequests=Array.of(this.pilotRegistrationRequests); 
        
    //           })




    //       }
    //     })
    // }

    pilotReject(license:string)
    {
      this.PilotStatus = true;
      this.ManagerStatus = false;
      this.licenceNo = license;
    }

    pilotRejectButtonClick()
    {
      this.userService.pilotRejectStatus(this.licenceNo,false,this.rejectPilot.value.Pilotcomments).subscribe(
        data=>{
          this.message=JSON.parse(JSON.stringify(data))['message']
          console.log(this.message)
          if(this.message=="Pilot Rejected")
          {
            console.log("rejected");
          


            this.userService.getPilotRegistrations().subscribe(
              data=>{
              console.log(data)
              this.pilotRegistrationRequests=data
             this.pilotRegistrationRequests=Array.of(this.pilotRegistrationRequests); 
        
              })


          this.PilotStatus = false


          }
        })
    }



}
