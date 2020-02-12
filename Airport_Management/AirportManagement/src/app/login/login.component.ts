import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AMSService } from '../ams.service';
import { stringify } from 'querystring';
import { RouterLink, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginForm: FormGroup;
  managerLoginForm: FormGroup;
  pilotLoginForm: FormGroup;
  message:string;
  id
  submitted = false;
  show
  comment
  constructor(private formbuilder:FormBuilder,private amsService:AMSService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.adminLoginForm = this.formbuilder.group({
      emailid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
    this.managerLoginForm = this.formbuilder.group({
      emailid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
    this.pilotLoginForm = this.formbuilder.group({
      Licensenumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  adminError()
  {
    return this.adminLoginForm.controls;
  }
  managerError()
  {
    return this.managerLoginForm.controls;
  }
  pilotError()
  {
    return this.pilotLoginForm.controls;
  }
  onAdminSubmit(){
   this.submitted=true;
    /* if(!this.adminLoginForm.invalid) */
    {
      this.amsService.admin=true;
      this.amsService.manager=false;
      this.amsService.pilot=false;
      this.amsService.superuser=false;

      console.log(this.id);
      console.log(this.adminLoginForm.value)
        this.amsService.adminlogin(this.adminLoginForm).subscribe(
          data=>{
           this.message=JSON.parse(JSON.stringify(data))['status'];
           this.comment=JSON.parse(JSON.stringify(data))['comment'];
        console.log(this.message);
        console.log(JSON.parse(JSON.stringify(data))['status']);
        if(this.message=="Matched")
        {
          if(this.adminLoginForm.value.emailid=="superuser@gmail.com")
      {
        this.router.navigateByUrl("superuser");
      }
      else
          this.router.navigateByUrl("requests");
        }
        else if(this.message=="No Match")
        {
          //alert("Invalid Credentials");
          this.show="not matched"
        }
        else{
          this.show="Admin Disapproved"
        }
            }
      )
          
          }
    }
    onManagerSubmit(){
      this.submitted=true;
     /*  if(!this.managerLoginForm.invalid) */
      {
      this.amsService.manager=true;
      this.amsService.admin=false;
      this.amsService.pilot=false;
      this.amsService.superuser=false;
    
      console.log(this.id);
      console.log(this.managerLoginForm.value)
        this.amsService.managerlogin(this.managerLoginForm).subscribe(
          data=>{
            console.log(data)
           this.message=JSON.parse(JSON.stringify(data))['status'];
           this.comment=JSON.parse(JSON.stringify(data))['comment'];
        console.log(this.message);
        console.log(JSON.parse(JSON.stringify(data))['status']);
        if(this.message=="Matched")
        {
          //console.log(JSON.parse(JSON.stringify(data))['user']);
          this.amsService.managerDetails=JSON.parse(JSON.stringify(data))['user'];
          this.router.navigateByUrl("manager");
        }
        else if(this.message=="No Match")
        {
          //alert("Invalid Credentials");
          this.show="not matched"
        }
        else{
          this.show="Admin Disapproved"
        }
            }
      )
        
          }
    }
    onPilotSubmit(){
      this.submitted=true;
      /* if(this.pilotLoginForm.invalid) */
      {
        this.amsService.pilot=true;
        this.amsService.admin=false;
        this.amsService.manager=false;
        this.amsService.superuser=false;
    
      console.log(this.id);
      console.log(this.pilotLoginForm.value)
        this.amsService.pilotlogin(this.pilotLoginForm).subscribe(
          data=>{
           this.message=JSON.parse(JSON.stringify(data))['status'];
           this.comment=JSON.parse(JSON.stringify(data))['comment'];
        console.log(this.message);
        console.log(JSON.parse(JSON.stringify(data))['status']);
        if(this.message=="Matched")
        {
          this.amsService.userLoggedIn=data['user']
          this.router.navigateByUrl("pilot");
        }
        else if(this.message=="No Match")
        {
          //alert("Invalid Credentials");
          this.show="not matched"
        }
        else{
          this.show="Admin Disapproved"
        }
            }
      )
          }
        
    
    }
  }
  
/*   if(this.id='manager')
  {
    console.log(this.id);
    console.log(this.loginForm.value)
      this.amsService.managerlogin(this.loginForm).subscribe(
        data=>{
         this.message=JSON.parse(JSON.stringify(data))['message'];
      /* console.log(this.message);
      console.log(JSON.parse(JSON.stringify(data))['message']); 
          }
    )
      if(this.message=="Matched")
    {
      this.router.navigateByUrl("manager");
    }
  } */
  /* if(this.id='pilot')
  {
    console.log(this.id);
    console.log(this.loginForm.value)
      this.amsService.pilotlogin(this.loginForm).subscribe(
        data=>{
         this.message=JSON.parse(JSON.stringify(data))['message'];
      /* console.log(this.message);
      console.log(JSON.parse(JSON.stringify(data))['message']); 
          }
    )
      if(this.message=="Matched")
    {
      this.router.navigateByUrl("pilot");
    }
  } */



