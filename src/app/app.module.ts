import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { UserregComponent } from './userreg/userreg.component';
import { CourseaddComponent } from './courseadd/courseadd.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { ViewFrndComponent } from './view-frnd/view-frnd.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const myroute:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'gal',
    component:GalleryComponent
  },
  {
    path:'adm',
    component:AdminComponent
  },
  {
    path:'reg',
    component:UserregComponent
  },
  {
    path:'add course',
    component:CourseaddComponent
  },
  {
    path:'add frnd',
    component:AddFriendComponent
  },{
    path:'viewf',
    component:ViewFrndComponent
  },
  {
    path:'viewc',
    component:ViewCourseComponent

  },
  {
    path:'cntct',
    component:ContactUsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    AdminComponent,
    UserregComponent,
    CourseaddComponent,
    AddFriendComponent,
    ViewCourseComponent,
    NavbarComponent,
    AdminNavbarComponent,
    NavadminComponent,
    ViewFrndComponent,
    NavbarUserComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
