import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CharacterComponent } from './character.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CharacterComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [CharacterComponent]
})
export class CharacterModule {}
