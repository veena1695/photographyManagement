import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ProgressComponent } from './progress/progress.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ChargesComponent } from './charges/charges.component';
import { ImagesComponent } from './images/images.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailMemberComponent } from './detail-member/detail-member.component' 
import { PaymentComponent } from './payment/payment.component' 
import { TableComponent } from './table/table.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MemberRequestComponent } from './member-request/member-request.component';
import { AllMemComponent } from './all-mem/all-mem.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { WeddingComponent } from './wedding/wedding.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CalComponent } from './cal/cal.component';
import { MyUsersComponent } from './my-users/my-users.component';
import { HomeeComponent } from './homee/homee.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'homee' , component: HomeeComponent},
  {path: 'register-user' , component: RegComponent},
  {path: 'register-member' , component: ProgressComponent},
  {path: 'wedding' , component: WeddingComponent},
  {path: 'status', component: StatusBarComponent},
  
  {
    path: 'main' , component: MemberDashboardComponent,
    children: [
      {path: 'profile' , component: ProfileComponent},
       {path: 'charges' , component: ChargesComponent},
      {path: 'edit-profile' , component: LayoutComponent},
      {path: 'images' , component: ImagesComponent},
      {path: 'table', component: TableComponent},
      {path: 'status', component: StatusBarComponent},
      {path: 'cal', component: CalComponent},
      {path: 'myusers', component: MyUsersComponent},
      {path: 'payment' , component: PaymentComponent},
    ]
  },
  // {path: 'charges' , component: ChargesComponent},
  {
    path: 'user-dash' , component: UserdashboardComponent,
    children: [
      {path:'details', component: DetailMemberComponent}
    ]
  },
  
  // {path: 'detail-member' , component:DetailMemberComponent },
  // {path: 'layout' , component: LayoutComponent},
  {
    path: 'admin-dash' , component: AdminDashComponent,
    children: [
      {path: 'request', component: MemberRequestComponent},
      {path: 'allmem', component: AllMemComponent },
      {path: 'alluser', component: AllUsersComponent },
    {path: '', redirectTo:'alluser', pathMatch: 'full'}
  ]
   },
   {path: 'payment' , component: PaymentComponent},
  {path: '', redirectTo:'homee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
