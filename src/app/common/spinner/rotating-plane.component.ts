import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Component({
  selector: 'sk-rotating-plane',
  styles: [`
    .rotating-plane-spinner {
      margin: 25px auto;
      width: 40px;
      height: 40px;
      
      -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
      animation: sk-rotateplane 1.2s infinite ease-in-out;
    }
    
    @-webkit-keyframes sk-rotateplane {
      0% {
        -webkit-transform: perspective(120px)
      }
      50% {
        -webkit-transform: perspective(120px) rotateY(180deg)
      }
      100% {
        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
      }
    }
    
    @keyframes sk-rotateplane {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
      }
      50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
      }
      100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      }
    }
  `],
  template: `
    <div class="spinner-container" [hidden]="!visible">
      <div class="spinner-loader-bg">
        <div class="rotating-plane-spinner spinner-content" [style.backgroundColor]="color"></div>
      </div>
    </div>
  `
})

export class RotatingPlaneComponent extends SpinnerComponent {}
