import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaneComponent } from './Admin/add-plane/add-plane.component';
import { AddHangarComponent } from './Admin/add-hangar/add-hangar.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { ManagerregistrationComponent } from './manager/managerregistration/managerregistration.component';
import { RegistrationComponent } from './Admin/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { PilotregistrationComponent } from './Pilot/pilotregistration/pilotregistration.component';
import { componentFactoryName } from '@angular/compiler';
import { PilotComponent } from './pilot/pilot.component';
import { RequestsComponent } from './Admin/requests/requests.component';
import { PlaneViewComponent } from './Admin/plane-view/plane-view.component';
import { EditPlaneComponent } from './Admin/edit-plane/edit-plane.component';
import { ViewHangarComponent } from './manager/view-hangar/view-hangar.component';
import { FlightplanComponent } from './pilot/flightplan/flightplan.component';
import { PilotWorkScheduleComponent } from './pilot/pilot-work-schedule/pilot-work-schedule.component';
import { PilotViewWorkScheduleComponent } from './pilot/pilot-view-work-schedule/pilot-view-work-schedule.component';
import { AuthGuardAdminService } from './pilot/auth-guard-admin.service';
import { AuthGuardManagerService } from './pilot/auth-guard-manager.service';
import { AuthGuardPilotService } from './pilot/auth-guard-pilot.service';
import { SuccessRegComponent } from './success-reg/success-reg.component';
import { SuperUserComponent } from './super-user/super-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PilotsuccessComponent } from './pilot/pilotsuccess/pilotsuccess.component';
import { ProfileComponent } from './profile/profile.component';
import { AddplaneSuccessComponent } from './Admin/addplane-success/addplane-success.component';



const routes: Routes = [
  {path: 'addplane', component: AddPlaneComponent},
    {path: 'addhanger', component: AddHangarComponent},
    {path:'superuser',component:SuperUserComponent},
    {path: 'admin', component:AdminComponent,canActivate:[AuthGuardAdminService]},
    {path: 'manager', component:ManagerComponent,canActivate:[AuthGuardManagerService]},
    {path: 'pilot', component:PilotComponent,canActivate:[AuthGuardPilotService]},
    {path: 'managerRegistration', component:ManagerregistrationComponent},
    {path: 'adminreg', component:RegistrationComponent},
    {path: 'login/:id', component:LoginComponent},
    {path:'pilotRegistration',component:PilotregistrationComponent},
    {path:'adminRegistration',component:RegistrationComponent},
    {path:'requests',component:RequestsComponent},
    {path:'viewplane',component:PlaneViewComponent},
    {path:'editplane/:id',component:EditPlaneComponent},
    {path:'viewhanger',component:ViewHangarComponent},
    {path:'flightplan',component:FlightplanComponent},
    {path:'pilotworkschedule',component:PilotWorkScheduleComponent},
    {path:'pilotviewworkschedule',component:PilotViewWorkScheduleComponent},
    {path:'success',component:SuccessRegComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'flightplansuccess',component:PilotsuccessComponent},
    {path:'profile',component:ProfileComponent},
    {path:'superuser',component:SuperUserComponent},
    {path:'adminsuccess',component:AddplaneSuccessComponent}

    //  {path:'viewschedule',component:}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
