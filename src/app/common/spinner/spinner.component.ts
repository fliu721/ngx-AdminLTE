import {Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  template: ''
})
export class SpinnerComponent implements OnInit, OnDestroy {
  public visible: boolean = true;
  public timeout: any;
  public baseClass: string = 'chasing-dots-spinner';
  public childClass: string = 'dot';
  public numItems: number = 2;

  @Input()
  public delay: number = 0;

  @Input()
  public color: string = '#333';

  @Input()
  public set isRunning(value: boolean) {
    if (!value) {
      this.cancel();
      this.visible = false;
      return;
    }

    if (this.timeout) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.visible = true;
      this.cancel();
    }, this.delay);
  }

  private cancel(): void {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }

  public get items() {
    return Array(this.numItems);
  }

  ngOnInit(): any {
    $('.spinner-content').css('top', ($(window).height() - 90)/2);
    $(window, "body").resize(function () {
      $('.spinner-content').css('top', ($(window).height() - 90)/2);
    });
  }

  ngOnDestroy(): any {
    this.cancel();
  }
}

export const SpinnerTemplate = `
  <div class="spinner-container" [hidden]="!visible">
    <div class="spinner-loader-bg">
      <div [ngClass]="baseClass" class="spinner-content">
          <div *ngFor="let item of items; let i = index" [ngClass]="childClass + (i+1)" [style.backgroundColor]="color"></div>
      </div>
    </div>
  </div>
`;
