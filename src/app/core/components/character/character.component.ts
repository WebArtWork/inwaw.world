import { Component, Input } from '@angular/core';
import { Storycharacter } from 'src/app/modules/story/interfaces/storycharacter.interface';
import { InwawworldService } from '../../services/inwawworld.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'core-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss'],
	standalone: false
})
export class CharacterComponent {
	readonly url = environment.url;

	readonly Math = Math;

	@Input() character: Storycharacter;

	@Input() compareToCharacter: Storycharacter;

	number(value: unknown): number {
		return Number(value);
	}

	constructor(public iww: InwawworldService) {}
}
