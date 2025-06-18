import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LicenseComponent } from './license.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LicenseComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [LicenseComponent]
})
export class LicenseModule {}
