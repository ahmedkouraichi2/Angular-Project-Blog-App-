import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layaout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TrermsAndConditionComponent } from './pages/trerms-and-condition/trerms-and-condition.component';
import { ConatctComponent } from './pages/conatct/conatct.component';
import { CategoryNavbarComponent } from './layaout/category-navbar/category-navbar.component';
import { SubscriptionFormComponent } from './layaout/subscription-form/subscription-form.component';
import { PostCardComponent } from './post-card/post-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    AboutUsComponent,
    TrermsAndConditionComponent,
    ConatctComponent,
    CategoryNavbarComponent,
    SubscriptionFormComponent,
    PostCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
