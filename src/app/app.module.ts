import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WebAdminModulesProvider } from './web-admin-modules-provider.module';
import { WebConsoleLoginModule, WebConsoleLoginComponent } from 'web-console-login';
import { WebConsoleComponent, AuthService, AuthGuard, WebConsoleCoreModule } from 'web-console-core';
import { NGXLogger, NgxLoggerLevel, LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { WC_API_BASE_PATH, WC_OAUTH_BASE_PATH } from 'web-console-core'


const LoggerModuleConfigured = LoggerModule.forRoot({
  level: (environment.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.DEBUG),
  serverLoggingUrl: '/api/logs',
  serverLogLevel: NgxLoggerLevel.OFF
});


//SetLoginRoute("login");

const appRoutes: Routes = [
  { path: 'login', component: WebConsoleLoginComponent },
  { path: '**', component: WebConsoleComponent, canActivate: [AuthGuard] , children:[] }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WebConsoleCoreModule, BrowserModule, WebAdminModulesProvider, WebConsoleLoginModule, LoggerModuleConfigured,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: WC_API_BASE_PATH, useValue: environment.API_BASE_PATH },
    { provide: WC_OAUTH_BASE_PATH, useValue: environment.OAUTH_BAS_PATH },
    WebAdminModulesProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
