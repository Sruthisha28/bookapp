import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { AddCategoryComponent } from './feature/category/add-category/add-category.component';

const routes: Routes = [
  {path:"",redirectTo:"header",pathMatch:"full"},
  {path:"header",component:HeaderComponent},
  {path:"add-category",component:AddCategoryComponent},
  // {path:"category",
  // loadChildren:"./feature/category/category.module#CategoryModule"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
