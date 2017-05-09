import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    $('body, html, .wrapper').css('height', $(window).height()+'px');
    $(window, "body").resize(function () {
      $('body, html, .wrapper').css('height', $(window).height()+'px');
    });
  }

  doUnLock () {
    console.log(">>>>");
    this.router.navigateByUrl('index');
  }
}
