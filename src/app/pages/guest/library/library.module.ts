import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LibraryComponent } from './library.component';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from 'src/app/core/modules/tab/tab.component';

const routes: Routes = [
	{
		path: '',
		component: LibraryComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, TabComponent],
	declarations: [LibraryComponent]
})
export class LibraryModule {}
