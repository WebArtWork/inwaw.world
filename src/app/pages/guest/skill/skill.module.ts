import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SkillComponent } from './skill.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: SkillComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [SkillComponent]
})
export class SkillModule {}
