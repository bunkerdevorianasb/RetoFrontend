import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidevarComponent } from './sidevar/sidevar.component';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { DragulaModule } from 'ng2-dragula';
import { UiSwitchModule } from 'ngx-ui-switch';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CreateToolComponent } from './dialog/create-tool/create-tool.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditToolComponent } from './dialog/edit-tool/edit-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    SidevarComponent,
    NavComponent,
    LayoutComponent,
    HomeComponent,
    ToolComponent,
    CreateToolComponent,
    EditToolComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    UiSwitchModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
