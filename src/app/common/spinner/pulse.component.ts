import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Component({
  selector: 'sk-pulse',
  styles: [`
    .pulse-spinner {
      margin: 25px auto;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      
      -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
      animation: sk-scaleout 1.0s infinite ease-in-out;
    }
    
    @-webkit-keyframes sk-scaleout {
      0% {
        -webkit-transform: scale(0);
      }
      100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
      }
    }
    
    @keyframes sk-scaleout {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
      }
    }
  `],
  template: `
    <div class="spinner-container" [hidden]="!visible">
      <div class="spinner-loader-bg">
        <div class="pulse-spinner spinner-content" [style.backgroundColor]="color"></div>
      </div>
    </div>
  `
})

export class PulseComponent extends SpinnerComponent {}
