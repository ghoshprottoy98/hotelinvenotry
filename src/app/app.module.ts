import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { HeaderModule } from './header/header.module';
import { RouteConfigToken } from './services/routeConfig.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './services/errorhandler.service';
import { CommentComponent } from './comment/comment.component';


function initFactory(initService: InitService){
  return ()=> initService.init();
  }

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    LoginComponent,
    NotfoundComponent,
    HoverDirective,
    EmailvalidatorDirective,
    CommentComponent,
  ],

  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule
  ],


  providers: [
    {provide : APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,    
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor ,
      multi:true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
    {provide : RouteConfigToken,
      useValue: {title:'Home'},    
    },
    {provide : ErrorHandler,
      useClass: GlobalErrorHandler,    
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
