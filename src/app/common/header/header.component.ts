import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Password } from '../models/password';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('chPwdModal') public chPwdModal : ModalDirective;
  @ViewChild('chPwdForm') public chPwdForm : NgForm;

  public pwd : Password = new Password ();


  constructor(
    public router: Router,
    public toastr: ToastsManager,
  ) {

  }

  ngOnInit() {

  }

  /**
   * 打开修改密码的对话框
   */
  showChPwdModal () {
    this.chPwdForm.reset();
    this.chPwdModal.show();
  }

  /**
   * 提交修改密码
   * @param form
   */
  doChangePwd () {
    if (this.chPwdForm.valid) {
      this.chPwdModal.hide();
      this.toastr.success('密码修改成功!请牢记您的新密码！', '成功!');
    }
  }

  /**
   * 注销登录
   */
  doLogout() {
    this.router.navigateByUrl('login');
  }

  doLock () {
    this.router.navigateByUrl('lock');
  }


}
