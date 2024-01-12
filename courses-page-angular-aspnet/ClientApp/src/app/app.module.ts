import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesService } from './courses.service';
import { CourseListComponent } from './course-list/course-list.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CourseCardComponent } from './course-list/course-card/course-card.component';
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    NotFoundComponent,
    FooterComponent,
    CourseListComponent,
    CategoryComponent,
    SearchComponent,
    CourseCardComponent,
    CourseDetailComponent,
    SearchbarComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
        children: []
      },
      {
        path: 'courses',
        pathMatch: 'full',
        component: CourseListComponent,
        children: []
      },
      {
        path: 'courses/:id',
        pathMatch: 'full',
        component: CourseDetailComponent,
        children: []
      },
      {
        path: 'search',
        component: SearchComponent,
        children: []
      },
      {
        path: 'categories',
        component: CategoryComponent,
        children: []
      },
      {
        path: '**',
        component: NotFoundComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
