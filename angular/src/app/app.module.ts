import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components-general/film-list/film-list.component';
import { FilmComponent } from './components-general/film/film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components-general/navbar/navbar.component';
import { SidebarComponent } from './components-general/sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components-auth/registration/registration.component';

import { LoginComponent } from './components-auth/login/login.component';
import { UserProfileComponent } from './components-auth/user-profile/user-profile.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ReviewService } from './services/review.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmComponent,
    NavbarComponent,
    SidebarComponent,
    RegistrationComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
