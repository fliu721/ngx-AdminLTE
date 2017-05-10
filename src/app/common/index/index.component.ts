import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2'


@Component( {
  selector: 'index',
  templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {
  private opts: any = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showCancelButton: true
  };

  constructor (public translate: TranslateService) {
    this.translate.get("sys.common").subscribe((res : any) => {
      this.opts.confirmButtonText = res.confirmBtnText;
      this.opts.cancelButtonText = res.cancelBtnText;
    });

    swal.setDefaults(this.opts);

  }

  public ngOnInit() {
    require('../../../../node_modules/jquery-slimscroll/jquery.slimscroll.js');
    require('../../../../node_modules/admin-lte/dist/js/app.js');
  }
}
