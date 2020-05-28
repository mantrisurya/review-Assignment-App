import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReviewTitleComponent } from './reviews/review-title/review-title.component';
import { ReviewDetailComponent } from './reviews/reviewDetail/review-detail/review-detail.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { ProfilePictureComponent } from './reviews/reviewDetail/profile-picture/profile-picture.component';
import { DescriptionComponent } from './reviews/reviewDetail/description/description.component';
import { ActionsComponent } from './reviews/reviewDetail/actions/actions/actions.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorComponent } from './reviews/reviewDetail/actions/author/author.component';
import { EngagmentComponent } from './reviews/reviewDetail/actions/engagment/engagment.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewTitleComponent,
    ReviewDetailComponent,
    ReviewsComponent,
    ProfilePictureComponent,
    DescriptionComponent,
    ActionsComponent,
    AuthorComponent,
    EngagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
