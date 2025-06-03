import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { GuessComponent } from './guess.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: GuessComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [GuessComponent]
})
export class GuessModule {}
