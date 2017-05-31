import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { fadeInOut } from '../animations/fade-in-out';
import { User } from '../models/user-model';
import { LoginService } from './login.service';
import { AlertConfig } from '../alert';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInOut]
})
export class LoginComponent implements OnInit {

  public user : User = new User ();
  public error: any = {
    show: false,
    msg: ''
  };

  constructor(
    public router: Router,
    public loginService: LoginService,
    public translate: TranslateService,
    private alertConfig: AlertConfig
  ) { }

  ngOnInit() {
    $('body, html, .wrapper').css('height', $(window).height()+'px');
    $(window, "body").resize(function () {
      $('body, html, .wrapper').css('height', $(window).height()+'px');
    });
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue'
    });
  }



  onChange() {
    this.alertConfig.showStatus = false;
  }

  doLogin(form : NgForm) {
    if (form.valid) {
      this.loginService.login(this.user)
        .subscribe(
          data => {
            if (data.json().status === 200) {
              this.router.navigateByUrl("index");
            }
          }
        );

    }

  }

}
