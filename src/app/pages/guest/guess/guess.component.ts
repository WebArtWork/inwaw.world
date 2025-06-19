import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { InwawworldService } from 'src/app/core/services/inwawworld.service';
import { Storycharacter } from 'src/app/modules/story/interfaces/storycharacter.interface';
import { AlertService, CoreService } from 'wacom';

@Component({
	templateUrl: './guess.component.html',
	styleUrls: ['./guess.component.scss'],
	standalone: false
})
export class GuessComponent {
	characters: Storycharacter[] = [];

	selectedCharacter: Storycharacter;

	selectedCharacters: Storycharacter[] = [];

	formDoc: FormInterface = this._form.getForm('docForm', {
		formId: 'docForm',
		title: 'Select character',
		components: [
			{
				name: 'Select',
				key: 'character',
				fields: [
					{
						name: 'wChange',
						value: this.addCharacter.bind(this)
					},
					{
						name: 'Placeholder',
						value: this._translateService.translate(
							'Character.Select character'
						)
					},
					{
						name: 'Label',
						value: this._translateService.translate(
							'Character.Character'
						)
					},
					{
						name: 'Items',
						value: this.characters
					},
					{
						name: 'Name',
						skipTranslation: true,
						value: 'name'
					},
					{
						name: 'Value',
						skipTranslation: true,
						value: 'name'
					}
				]
			}
		]
	});

	submition: Record<string, unknown> = {};

	constructor(
		private _form: FormService,
		private _alert: AlertService,
		private _core: CoreService,
		private _iww: InwawworldService,
		private _translateService: TranslateService
	) {
		this._core.onComplete('storycharacter_loaded').then(() => {
			setTimeout(() => {
				this.characters.push(...this._iww.characters);
				this.selectedCharacter =
					this.characters[
						Math.floor(Math.random() * this.characters.length)
					];
			}, 500);
		});
	}

	addCharacter() {
		if (this.selectedCharacter.name === this.submition['character']) {
			this._alert.success({
				text: `Well done, you found the character, good job, used ${this.selectedCharacters.length + 1} tries`
			});
		}

		this.selectedCharacters.push(
			this.characters.find(
				(b) => b.name === this.submition['character']
			) as Storycharacter
		);

		this.characters.splice(
			this.characters.findIndex(
				(b) => b.name === this.submition['character']
			),
			1
		);

		this.submition['character'] = '';
	}
}
