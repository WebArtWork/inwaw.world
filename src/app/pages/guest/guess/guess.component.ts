import { Component } from '@angular/core';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { AlertService } from 'wacom';
import { Storycharacter } from 'src/app/modules/story/interfaces/storycharacter.interface';

@Component({
	templateUrl: './guess.component.html',
	styleUrls: ['./guess.component.scss'],
	standalone: false
})
export class GuessComponent {
	characters: Storycharacter[] = [];

	selectedCharacter: Storycharacter = [][
		Math.floor(Math.random() * [].length)
	];

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
						value: 'Select brawler you believe is correct'
					},
					{
						name: 'Label',
						value: 'Brawler'
					},
					{
						name: 'Items',
						value: this.characters
					},
					{
						name: 'Name',
						skipTranslation: true,
						value: 'Name'
					},
					{
						name: 'Value',
						skipTranslation: true,
						value: 'Name'
					}
				]
			}
		]
	});

	submition: Record<string, unknown> = {};

	constructor(
		private _form: FormService,
		private _alert: AlertService
	) {}

	addCharacter() {
		if (this.selectedCharacter.name === this.submition['brawler']) {
			this._alert.success({
				text: `Well done, you found the Brawler, good job, used ${this.selectedCharacters.length + 1} tries`
			});
		}

		this.selectedCharacters.push(
			this.characters.find(
				(b) => b.name === this.submition['brawler']
			) as Storycharacter
		);

		this.characters.splice(
			this.characters.findIndex(
				(b) => b.name === this.submition['brawler']
			),
			1
		);

		this.submition['brawler'] = '';
	}
}
