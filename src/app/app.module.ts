import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/bloglist.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBlogListComponent } from './admin/bloglist/admin.bloglist.component';
import { AdminAddBlogComponent } from './admin/addblog/admin.addblog.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent ,
    children:[
      { path: '',   redirectTo: 'list', pathMatch: 'full'  },
      {path: 'list', component: AdminBlogListComponent}, 
      {path: 'addblog', component: AdminAddBlogComponent}
    ]
  },
  { path: 'blog',        component: BlogListComponent },
  { path: '',   redirectTo: '/blog', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    BlogListComponent,
    AdminComponent,
    AdminBlogListComponent,
    AdminAddBlogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
