import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyckeditorComponent } from './myckeditor/myckeditor.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  declarations: [AppComponent, MyckeditorComponent],
  imports: [BrowserModule, FormsModule, CKEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
