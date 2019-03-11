import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from 'src/Lib/dynamicForm/core/core.module';
import { DynamicFormsBootstrapUIModule } from 'src/Lib/dynamicForm/form/dynamic-bootstrap-form-ui.module';
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    DynamicFormsCoreModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    DynamicFormsBootstrapUIModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
