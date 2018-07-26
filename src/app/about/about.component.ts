import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('template1') tpl1: TemplateRef<any>;
  @ViewChild('template2') tpl2: TemplateRef<any>;
  private switchVar:string = 'tpl1';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

  getTemplate(): TemplateRef<any> {
    switch(this.switchVar) {
      case 'tpl1':
      return this.tpl1;
      case 'tpl2':
      return this.tpl2;
    }
  }

  switchTpl() {
    if (this.switchVar === 'tpl1') {
      this.switchVar = 'tpl2';
    } else {
      this.switchVar = 'tpl1';
    }
    console.log(this.switchVar);
  }

}
