import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { plane } from './pilot/flightplan/plane';

@Injectable({
  providedIn: 'root'
})
export class AMSService {
  userLoggedIn;
  planeList;

  admin:boolean=false
  manager:boolean=false
  pilot:boolean=false
  superuser:boolean=false

  constructor(private httpclient:HttpClient) { }
  managerDetails:any
  getData():Observable<any>
  {
    return this.httpclient.get("http://localhost:28147/api/admin/GetPilot");
  }
 
  adminlogin(user:any):Observable<any>{
    let body = JSON.stringify(user.value);
    let header= new HttpHeaders({'Content-Type':'application/json','responseType':'text'})
    let options = {headers:header}
    //console.log(this.httpclient.post("https://localhost:44319/api/admin/PostAdminLogin",body,options))
    return this.httpclient.post("http://localhost:28147/api/admin/PostAdminLogin",body,options)
  }
  managerlogin(user:any):Observable<any>{
    let body = JSON.stringify(user.value);
    let header= new HttpHeaders({'Content-Type':'application/json','responseType':'text'})
    let options = {headers:header}
    // console.log(this.httpclient.post("https://localhost:44319/api//PostManagerLogin/"+id,body,options))
    return this.httpclient.post("http://localhost:28147/api/manager/PostManagerLogin",body,options)
  }

  pilotlogin(user:any):Observable<any>{
    let body = JSON.stringify(user.value);
    let header= new HttpHeaders({'Content-Type':'application/json','responseType':'text'})
    let options = {headers:header}
    // console.log(this.httpclient.post("https://localhost:44319/api/admin/PostAdminLogin/"+id,body,options))
    return this.httpclient.post("http://localhost:28147/api/pilot/PostPilotLogin",body,options)
  }

//admin registration
adminRegister(userDetails:any)
{
  let body = JSON.stringify(userDetails.value)
  console.log(body);
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  return this.httpclient.post("http://localhost:28147/api/admin/PostAdminReg",body,options)
}

// Manager registration

managerRegister(userDetails:any)
{
  let body = JSON.stringify(userDetails.value)
  console.log(body);
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  return this.httpclient.post("http://localhost:28147/api/manager/PostManagerReg",body,options)
}
pilotRegister(userDetails:any)
{
  let body = JSON.stringify(userDetails.value)
  console.log(body);
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  return this.httpclient.post("http://localhost:28147/api/pilot/PostPilotReg",body,options)
}
addPlane(userDetails:any)
{
  let body = JSON.stringify(userDetails.value)
  console.log(body);
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  return this.httpclient.post("http://localhost:28147/api/admin/PostPlane",body,options)
}
getManagerRegistrations():Observable<any[]>
  {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log("manager Registration");
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/manager/getManager",options))
    return this.httpclient.get<any[]>("http://localhost:28147/api/manager/getManager",options)
  }
  getPilotRegistrations():Observable<any[]>
  {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log("Insode service");
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/pilot/getPilot",options))
    return this.httpclient.get<any[]>("http://localhost:28147/api/pilot/getPilot",options)
  }
  managerApproveStatus(mEmail:any, status:any,comments:any)
  {
    let data = mEmail+"/"+status+"/"+comments;
    console.log(data)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put("http://localhost:28147/api/admin/PutManagerApproval/"+data,options))
    return this.httpclient.put("http://localhost:28147/api/admin/PutManagerApproval/"+data,options)
  }
  // managerRejectStatus(mEmail:any,status:any)
  // {
  //   let data = mEmail+"/"+status
  //   console.log(data)
  //   let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  //   let options = { headers: header };
  //   console.log(this.httpclient.put("http://localhost:28147/api/admin/PutManagerApproval/"+data,options))
  //   return this.httpclient.put("http://localhost:28147/api/admin/PutManagerApproval/"+data,options)
  // }
  pilotApproveStatus(license:any,status:any, comments:any)
  {
    let data = license+"/"+status+"/"+comments;
    console.log(data)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options))
    return this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options)
  }


  // pilotRejectStatus(license:any,status:any)
  // {
  //   let data = license+"/"+status
  //   console.log(data)
  //   let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  //   let options = { headers: header };
  //   console.log(this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options))
  //   return this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options)
  // }
  // get plane details
  getPlaneDetails(){
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/admin/GetPlane",options))
    return this.httpclient.get<any[]>("http://localhost:28147/api/admin/GetPlane",options)
  }

  //get hangar details
  getHangarDetails(){
    let manager = this.managerDetails.managerId;
    console.log(manager);
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/manager/GetHangar/"+manager,options))
    return this.httpclient.get<any[]>("http://localhost:28147/api/manager/GetHangar/"+manager,options)
  }

   // get plane details
   getPlaneDetailsID(planeId:any){
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/admin/GetPlaneID/"+planeId,options))
    return this.httpclient.get("http://localhost:28147/api/admin/GetPlaneID/"+planeId,options)
  }
  updatePlaneDetails(planeId:any,userDetails:any){
    let body = JSON.stringify(userDetails.value)
    console.log(body);
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log("Insode service");
    console.log(this.httpclient.put<any[]>("http://localhost:28147/api/admin/PutPlane/"+planeId,options))
    return this.httpclient.put<any[]>("http://localhost:28147/api/admin/PutPlane/"+planeId,body,options)
  }
  addhangar(userDetails:any)
  {
    let body=JSON.stringify(userDetails.value)
    console.log(body);
    let header = new HttpHeaders({'Content-type':'application/json','responseType':'text'})
    let options={headers:header};
    return this.httpclient.post("http://localhost:28147/api/admin/PostHangar",body,options);
    
  }
  getManagers():Observable<any[]>
  {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log("Insode service");
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/manager/GetManagerId",options))
    return this.httpclient.get<any[]>("http://localhost:28147/api/manager/GetManagerId",options)
  }

  getPlaneID(status:string){
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.get<any[]>("http://localhost:28147/api/manager/GetPlane/"+status,options))
    return this.httpclient.get<any[]>("http://localhost:28147/api/manager/GetPlane/"+status,options)

  }
  updateHangarSubmit(planeId:number,hangarId:number){
    // let planeId= JSON.stringify(allot.value.planeId)
    // let hangarId= JSON.stringify(allot.value.hangarId)
    let body = hangarId+"/"+planeId;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put<any[]>("http://localhost:28147/api/manager/GetPlaneAllotted/"+body,options))
    return this.httpclient.put<any[]>("http://localhost:28147/api/manager/GetPlaneAllotted/"+body,options)

  }




// modified


// get pilot work details
getPilotworkscheduleview(){
  console.log("gtfgh");  
  console.log(this.userLoggedIn);
  let l_no:any = this.userLoggedIn.licenseNumber;
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  console.log(l_no);
  console.log("http://localhost:28147/api/pilot/GetWorkSchedule/"+l_no)
  return this.httpclient.post<any[]>("http://localhost:28147/api/pilot/GetWorkSchedule/"+l_no,options)
}


SchedulesPilot()
{
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
 
  console.log(this.httpclient.get<any[]>("http://localhost:28147/api/pilot/GetScheduledPilot",options))
  return this.httpclient.get<any[]>("http://localhost:28147/api/pilot/GetScheduledPilot",options)
}


//to add flight plan

addFlightPlan(userDetails:any)
{
let body = JSON.stringify(userDetails.value)
console.log(body);
let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
let options = { headers: header };
return this.httpclient.post<any[]>("http://localhost:28147/api/pilot/PostFlightPlan",body,options)

}

getFlightPlanAllotedHanger()
{
let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
let options = { headers: header };
return this.httpclient.get<plane[]>("http://localhost:28147/api/pilot/GetFlightPlanAllotedHanger",options)
}


 // pilotWorkSchdule

 pilotWorkSchdule(userDetails:any){
  let body = JSON.stringify(userDetails.value)
  console.log(body);
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  return this.httpclient.post<any[]>("http://localhost:28147/api/admin/PostWorkSchedule",body,options)
}

// super User
getAdminRegistrations():Observable<any[]>
{
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  console.log("Insode service");
  console.log(this.httpclient.get<any[]>("http://localhost:28147/api/superuser/GetAdmin",options))
  return this.httpclient.get<any[]>("http://localhost:28147/api/superuser/GetAdmin",options)
}
//SuperUser
adminApproveStatus(mEmail:any, status:any, comments:any)
  {
    let data = mEmail+"/"+status+"/"+comments
    console.log(data)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put("http://localhost:28147/api/superuser/PutAdminApproval/"+data,options))
    return this.httpclient.put("http://localhost:28147/api/superuser/PutAdminApproval/"+data,options)
  }
  // Super User
  // adminRejectStatus(mEmail:any,status:any)
  // {
  //   let data = mEmail+"/"+status
  //   console.log(data)
  //   let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  //   let options = { headers: header };
  //   console.log(this.httpclient.put("http://localhost:28147/api/superuser/PutAdminApproval/"+data,options))
  //   return this.httpclient.put("http://localhost:28147/api/superuser/PutAdminApproval/"+data,options)
  // }
  //feedback
  getFeedBack()
{let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
let options = { headers: header };
return this.httpclient.get<plane[]>("http://localhost:28147/api/admin/Getfeedback",options)

}
//contact us
contactus(userDetails:any)
{
  let body = JSON.stringify(userDetails.value)
  console.log(body);
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  return this.httpclient.post("http://localhost:28147/api/admin/PostContactus",body,options)
}
reject(email:string,status:any,comments:string)
{
  let data = email+"/"+status
  console.log(data)
  let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  let options = { headers: header };
  console.log(this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options))
  return this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options)
}
 adminRejectStatus(mEmail:any,status:any,comments:any)
  {
    let data = mEmail+"/"+status+"/"+comments
    console.log(data)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put("http://localhost:28147/api/superuser/PutAdminApproval/"+data,options))
    return this.httpclient.put("http://localhost:28147/api/superuser/PutAdminApproval/"+data,options)
  }
 pilotRejectStatus(license:any,status:any,comments:any)
  {
    let data = license+"/"+status+"/"+comments
    console.log(data)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options))
    return this.httpclient.put("http://localhost:28147/api/admin/PutPilotApproval/"+data,options)
  }
managerRejectStatus(mEmail:any,status:any,comments:any)
  {
    let data = mEmail+"/"+status+"/"+comments
    console.log(data)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
    let options = { headers: header };
    console.log(this.httpclient.put("http://localhost:28147/api/admin/PutManagerApproval/"+data,options))
    return this.httpclient.put("http://localhost:28147/api/admin/PutManagerApproval/"+data,options)
  }

}



