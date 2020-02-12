import { Component, OnInit } from '@angular/core';
import { AMSService } from '../ams.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent implements OnInit {

  isAdmin : boolean;
  AdminRegistrationRequests:any[]
  message:string
  adminStatus:boolean
  rejectAdmin:FormGroup
  aEmail

  constructor(private userService:AMSService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.isAdmin = true;
    this.userService.getAdminRegistrations().subscribe(
      data=>{
      console.log(data)
      this.AdminRegistrationRequests=data
     this.AdminRegistrationRequests=Array.of(this.AdminRegistrationRequests);
      })
      this.rejectAdmin=this.formBuilder.group({
            
        Admincomments: new FormControl('', [Validators.required])
        })
  }
  adminClick()
  {
    this.isAdmin = false;
    console.log(this.AdminRegistrationRequests);
  }



  adminApprove(mEmail:string){  
    this.userService.adminApproveStatus(mEmail,true,null).subscribe(
      data => {
        this.message = JSON.parse(JSON.stringify(data))['message']
        console.log(this.message)
        if(this.message == "Admin Approved")
        {
          console.log("approved");
         
         this.userService.getAdminRegistrations().subscribe(
          data=>{
          console.log(data)
          this.AdminRegistrationRequests=data
         this.AdminRegistrationRequests=Array.of(this.AdminRegistrationRequests);
          })
        }
        })
    }

   
    adminReject(mEmail:string)
    {
      this.aEmail = mEmail;
      this.adminStatus=true
    }
    adminRejectButtonClick(){
      console.log("Inside function")
      this.userService.adminRejectStatus(this.aEmail,false,this.rejectAdmin.value.Admincomments).subscribe(
        data=>{
          this.message=JSON.parse(JSON.stringify(data))['message']
          console.log(this.message)
          if(this.message=="Admin Rejected")
          {
            console.log("rejected");
            this.userService.getAdminRegistrations().subscribe(
              data=>{
              console.log(data)
              this.AdminRegistrationRequests=data
             this.AdminRegistrationRequests=Array.of(this.AdminRegistrationRequests);
              })
              this.adminStatus=false
          }
        })
    }



}
 // adminReject(mEmail:string)
    // {
    //   this.userService.adminRejectStatus(mEmail,false).subscribe(
    //     data=>{
    //       this.message=JSON.parse(JSON.stringify(data))['message']
    //       console.log(this.message)
    //       if(this.message=="Admin Rejected")
    //       {
    //         console.log("rejected");
            
    //         this.userService.getAdminRegistrations().subscribe(
    //           data=>{
    //           console.log(data)
    //           this.AdminRegistrationRequests=data
    //          this.AdminRegistrationRequests=Array.of(this.AdminRegistrationRequests);
    //           })

    //       }
    //     })
    // }