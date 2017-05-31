import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { TranslateService } from '@ngx-translate/core';

import { LoadingService } from './common/spinner/loading.service';
import { SpinnerService } from './common/spinner/spinner.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public spinnerRunning : boolean = false;
  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: SpinnerService,
    private loading: LoadingService
  ) {
    this.spinner.runningStatus.subscribe(isRunning => {
      this.spinnerRunning = isRunning;
    });
    /*httpInterceptor.request().addInterceptor((data, method) => {
      const dataStr = data[0]; //url
      if (dataStr.match(/assets\/i18n/)) {
        return data;
      } else {
        data[0] = environment.remoteAddress + dataStr
      }
      this.loading.show();
      return data;
    });


    httpInterceptor.response().addInterceptor((res, method) => {


      return res.do(r => {
        console.log(method, r);
        if (!r.ok) {

        } else {

        }
      });
    });*/

  }

  ngOnInit() {

    // 订阅路由事件信息，用于修改页面标题
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
      });

    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  public ngAfterViewInit(): void {

    // hide spinner once all loaders are completed
    this.loading.hide();
  }

}
