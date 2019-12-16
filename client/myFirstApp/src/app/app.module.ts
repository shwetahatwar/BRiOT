import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { HttpModule } from '@angular/http';
import { AppConfigModule } from 'src/app-config.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AppConfigModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
