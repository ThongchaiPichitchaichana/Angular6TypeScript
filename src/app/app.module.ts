import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportComponent } from './component/report/report.component';
import { ReportService } from './report.service';
import { HttpClientModule} from '@angular/common/http';
import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule ,
	HttpClientModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
