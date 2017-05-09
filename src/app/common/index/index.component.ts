import { Component, OnInit } from '@angular/core';



@Component( {
    selector: 'index',
    templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {
  public ngOnInit() {
    require('../../../../node_modules/jquery-slimscroll/jquery.slimscroll.js');
    require('../../../../node_modules/admin-lte/dist/js/app.js');
  }
}
