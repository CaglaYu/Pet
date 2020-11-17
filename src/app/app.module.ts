import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './_helpers/auth.guard';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { EklepetComponent } from './eklepet/eklepet.component';
import { DuzeltpetComponent } from './duzeltpet/duzeltpet.component';
import { RegisterComponent } from './account/register.component';
import { LostpetComponent } from './lostpet/lostpet.component';
import { FoundpetComponent } from './foundpet/foundpet.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    EklepetComponent,
    DuzeltpetComponent,
    LostpetComponent,
    FoundpetComponent,
    CarouselComponent,
    RegisterComponent,
    UserProfileComponent,
    AlertComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AccountService ,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }