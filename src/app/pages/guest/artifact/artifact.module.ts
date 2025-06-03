import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ArtifactComponent } from './artifact.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ArtifactComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ArtifactComponent]
})
export class ArtifactModule {}
