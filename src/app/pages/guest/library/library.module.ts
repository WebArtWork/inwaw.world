import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LibraryComponent } from './library.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LibraryComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [LibraryComponent]
})
export class LibraryModule {}
