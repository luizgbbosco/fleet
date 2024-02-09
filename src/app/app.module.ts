import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { VeiculosModule } from './pages/veiculos/veiculos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    VeiculosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
