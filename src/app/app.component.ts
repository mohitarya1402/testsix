import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'ng2-ckeditor';
  content: string = '';
  ckeConfig: CKEDITOR.config | undefined;
  mycontent: string | undefined;
  log: string = '';
  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      removePlugins: 'exportpdf',
    };
    console.log(this.content);
  }
  onChange($event: any): void {
    console.log('onChange');
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log('onPaste');
    //this.log += new Date() + "<br />";
  }
}
