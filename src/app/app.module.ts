import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageBodyComponent } from './shared/components/page-body/page-body.component';
import { PageBodyTopComponent } from './shared/components/page-body-top/page-body-top.component';
import { PageBodyFooterComponent } from './shared/components/page-body-footer/page-body-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PageBodyComponent,
    PageBodyTopComponent,
    PageBodyFooterComponent,
    TabsComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


