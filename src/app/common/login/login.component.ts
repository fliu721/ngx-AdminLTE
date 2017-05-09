import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user-model';
import { fadeInOut } from '../animations/fade-in-out';
//import { animateFactory } from 'ng2-animate';

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
    public router: Router
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
    this.error.show = false;
  }

  doLogin(form : NgForm) {

    if (form.valid) {
      if (this.user.userName == 'admin' && this.user.password == 'admin') {
        this.router.navigateByUrl("index");
      } else {
        this.error.show = true;
        this.error.msg = '用户名或密码错误！';
      }
    }

  }

}
