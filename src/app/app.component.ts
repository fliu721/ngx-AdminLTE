import {Component, OnInit} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService
  ) {

  }

  ngOnInit() {
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

}
