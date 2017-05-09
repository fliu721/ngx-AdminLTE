import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-aside',
  templateUrl: 'right-aside.component.html',
  styleUrls: ['right-aside.component.css']
})
export class RightAsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    require('../../../../node_modules/admin-lte/dist/js/demo.js');
  }

}
