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
    path:'view friend',
    component:ViewFriendComponent
  },
  {
    path:'viewc',
    component:ViewCourseComponent

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
    NavbarComponent
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
