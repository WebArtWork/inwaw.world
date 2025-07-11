import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorychangeService } from '../../services/storychange.service';
import { Storychange } from '../../interfaces/storychange.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { storychangeFormComponents } from '../../formcomponents/storychange.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';
import { Router } from '@angular/router';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './changes.component.html',
	styleUrls: ['./changes.component.scss']
})
export class ChangesComponent extends CrudComponent<
	StorychangeService,
	Storychange,
	FormInterface
> {
	story = this._router.url.includes('/change/')
		? this._router.url.replace('/change/', '')
		: '';

	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storychangeService: StorychangeService,
		_translate: TranslateService,
		_form: FormService,
		private _router: Router
	) {
		super(
			storychangeFormComponents,
			_form,
			_translate,
			_storychangeService
		);

		this.setDocuments();
	}
}
