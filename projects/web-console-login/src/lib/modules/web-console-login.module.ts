import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { WebConsoleLoginComponent } from '../components/web-console-login.component';
import { WebAdminCoreModule } from 'web-console-core'

@NgModule({
  imports: [
    FormsModule, WebAdminCoreModule
  ],
  declarations: [WebConsoleLoginComponent],
  exports: [WebConsoleLoginComponent]
})
export class WebConsoleLoginModule { }
