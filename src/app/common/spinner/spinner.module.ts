import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner.component';
import { RotatingPlaneComponent } from './rotating-plane.component';
import { DoubleBounceComponent } from './double-bounce.component';
import { WaveComponent } from './wave.component';
import { WanderingCubesComponent } from './wandering-cubes.component';
import { PulseComponent } from './pulse.component';
import { ChasingDotsComponent } from './chasing-dots.component';
import { CircleComponent } from './circle.component';
import { ThreeBounceComponent } from './three-bounce.component';
import { CubeGridComponent } from './cube-grid.component';
import { WordPressComponent } from './word-press.component';
import { FadingCircleComponent } from './fading-circle.component';
import { FoldingCubeComponent } from './folding-cube.component';

export {
  SpinnerComponent,
  RotatingPlaneComponent,
  DoubleBounceComponent,
  WaveComponent,
  WanderingCubesComponent,
  PulseComponent,
  ChasingDotsComponent,
  CircleComponent,
  ThreeBounceComponent,
  CubeGridComponent,
  WordPressComponent,
  FadingCircleComponent,
  FoldingCubeComponent
};

const NG_SPIN_KIT_COMPONENTS = [
  SpinnerComponent,
  RotatingPlaneComponent,
  DoubleBounceComponent,
  WaveComponent,
  WanderingCubesComponent,
  PulseComponent,
  ChasingDotsComponent,
  CircleComponent,
  ThreeBounceComponent,
  CubeGridComponent,
  WordPressComponent,
  FadingCircleComponent,
  FoldingCubeComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: NG_SPIN_KIT_COMPONENTS,
  exports: NG_SPIN_KIT_COMPONENTS,
})
export class SpinnerModule {}
