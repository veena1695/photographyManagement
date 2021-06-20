import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMarqueeModule } from 'ng-marquee';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './progress/progress.component';
import { RegComponent } from './reg/reg.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WeddingComponent } from './wedding/wedding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ChargesComponent } from './charges/charges.component';
import { ImagesComponent } from './images/images.component';
import { AngularFireModule  } from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireStorageModule} from 'angularfire2/storage';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { DetailMemberComponent } from './detail-member/detail-member.component';
import { PaymentComponent } from './payment/payment.component';
import { TableComponent } from './table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberRequestComponent } from './member-request/member-request.component';
import { AllMemComponent } from './all-mem/all-mem.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CalComponent } from './cal/cal.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { HomeeComponent } from './homee/homee.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProgressComponent,
    RegComponent,
    MemberDashboardComponent,
    WeddingComponent,
    UserdashboardComponent,
    LayoutComponent,
    ChargesComponent,
    ImagesComponent,
    ProfileComponent,
    AdminDashComponent,
    DetailMemberComponent,
    PaymentComponent,
    TableComponent,
    MemberRequestComponent,
    AllMemComponent,
    AllUsersComponent,
    StatusBarComponent,
    CalComponent,
    MyUsersComponent,
    HomeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgMarqueeModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDJZVeVo6NBOxj2NmParUtKcFh2b7PJa4c",
      authDomain: "photomanagement-3c012.firebaseapp.com",
      databaseURL: "https://photomanagement-3c012.firebaseio.com",
      projectId: "photomanagement-3c012",
      storageBucket: "photomanagement-3c012.appspot.com",
      messagingSenderId: "846243437141",
      appId: "1:846243437141:web:62987bb69952b9d56d92dc",
      measurementId: "G-15F5P88Y6B"
  
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
