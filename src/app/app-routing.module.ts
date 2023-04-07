import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TrermsAndConditionComponent } from './pages/trerms-and-condition/trerms-and-condition.component';
import { ConatctComponent } from './pages/conatct/conatct.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"category",component:SingleCategoryComponent},
  {path:"post",component:SinglePostComponent},
  {path:"about",component:AboutUsComponent},
  {path:"term-conditions",component:TrermsAndConditionComponent},
  {path:"contact",component:ConatctComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
