import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';

const appRoutes: Routes = [
{
  path:'showbooks',
  component:ShowBooksComponent,
  pathMatch:'full'
},
{
  path:'addbook',
  component:AddBookComponent,
  pathMatch:'full'
},
{
  path:'',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'dashboard',
  component:DashboardComponent,
  pathMatch:'full'
}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
