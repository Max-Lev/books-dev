import { BookComponent } from './../../components/book/book.component';
import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: 'books', component: BookComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: BookComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  declarations: []
})
export class routingModule {
  constructor() {
    console.log('app routing module');
  }
}


