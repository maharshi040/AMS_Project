import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddPlaneComponent } from './Admin/add-plane/add-plane.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './Admin/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerComponent } from './manager/manager.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotregistrationComponent } from './Pilot/pilotregistration/pilotregistration.component';
import { AddHangarComponent } from './Admin/add-hangar/add-hangar.component';
import { ManagerregistrationComponent } from './manager/managerregistration/managerregistration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { RequestsComponent } from './Admin/requests/requests.component';
import { PlaneViewComponent } from './Admin/plane-view/plane-view.component';
import { EditPlaneComponent } from './Admin/edit-plane/edit-plane.component';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ViewHangarComponent } from './manager/view-hangar/view-hangar.component';

import { FlightplanComponent } from './pilot/flightplan/flightplan.component';
import { PilotWorkScheduleComponent } from './pilot/pilot-work-schedule/pilot-work-schedule.component';
import { PilotViewWorkScheduleComponent } from './pilot/pilot-view-work-schedule/pilot-view-work-schedule.component';
import { SuccessRegComponent } from './success-reg/success-reg.component';
import { SuperUserComponent } from './super-user/super-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FlipFlopFooterComponent } from './flip-flop-footer/flip-flop-footer.component';
import { PilotsuccessComponent } from './pilot/pilotsuccess/pilotsuccess.component';
import { ProfileComponent } from './profile/profile.component';
import { AddplaneSuccessComponent } from './Admin/addplane-success/addplane-success.component';
/* import { ProfileComponent } from './pilot/profile/profile.component'; */

const routes: Routes = [
    
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddPlaneComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ManagerComponent,
    ManagerregistrationComponent,
    PilotComponent,
    PilotregistrationComponent,
    AddHangarComponent,
    LoginComponent,
    HomeComponent,
    RequestsComponent,
    PlaneViewComponent,
    EditPlaneComponent,
    ViewHangarComponent,
      FlightplanComponent,
      PilotWorkScheduleComponent,
      PilotViewWorkScheduleComponent,
      SuccessRegComponent,
      SuperUserComponent,
      AboutUsComponent,
      ContactUsComponent,
      FeedbackComponent,
      FlipFlopFooterComponent,
      PilotsuccessComponent,
      ProfileComponent,
      AddplaneSuccessComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}]),
  ],
  providers: [AsyncPipe,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
