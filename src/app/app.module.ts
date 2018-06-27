import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WebAdminModulesProvider } from './web-admin-modules-provider.module';
import { WebConsoleLoginModule, WebConsoleLoginComponent } from 'web-console-login';
import { WebAdminConsoleComponent } from 'web-console-core';


SetLoginRoute("login");

const appRoutes: Routes = [
  { path: 'login', component: WebConsoleLoginComponent },
  { path: '**', component: WebAdminConsoleComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, WebAdminModulesProvider, WebConsoleLoginModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
