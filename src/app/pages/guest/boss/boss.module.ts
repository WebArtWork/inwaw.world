import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { BossComponent } from './boss.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: BossComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [BossComponent]
})
export class BossModule {}
