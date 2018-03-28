import { NgModule } from '@angular/core';
import { MyPipe } from './my/my';
@NgModule({
	declarations: [MyPipe],
	imports: [],
	exports: [MyPipe]
})
export class PipesModule {}
