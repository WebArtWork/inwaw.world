import { Injectable } from '@angular/core';
import { Storyartifact } from 'src/app/modules/story/interfaces/storyartifact.interface';
import { Storyboss } from 'src/app/modules/story/interfaces/storyboss.interface';
import { Storycharacter } from 'src/app/modules/story/interfaces/storycharacter.interface';
import { Storycharactertype } from 'src/app/modules/story/interfaces/storycharactertype.interface';
import { Storyskill } from 'src/app/modules/story/interfaces/storyskill.interface';
import { StoryartifactService } from 'src/app/modules/story/services/storyartifact.service';
import { StorybossService } from 'src/app/modules/story/services/storyboss.service';
import { StorycharacterService } from 'src/app/modules/story/services/storycharacter.service';
import { StorycharactertypeService } from 'src/app/modules/story/services/storycharactertype.service';
import { StoryskillService } from 'src/app/modules/story/services/storyskill.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InwawworldService {
	characters: Storycharacter[] = [];

	characterTypes: Storycharactertype[] = [];

	bosses: Storyboss[] = [];

	skills: Storyskill[] = [];

	artifacts: Storyartifact[] = [];

	constructor(
		private _characterService: StorycharacterService,
		private _bossService: StorybossService,
		private _skillService: StoryskillService,
		private _charaterTypeService: StorycharactertypeService,
		private _artifactService: StoryartifactService
	) {
		this._characterService
			.get({ query: 'story=' + environment.story }, { name: 'public' })
			.subscribe((characters) => {
				this.characters = characters;

				console.log(characters);
			});

		this._charaterTypeService
			.get({ query: 'story=' + environment.story }, { name: 'public' })
			.subscribe((characterTypes) => {
				this.characterTypes = characterTypes;

				console.log(characterTypes);
			});

		this._bossService
			.get({ query: 'story=' + environment.story }, { name: 'public' })
			.subscribe((bosses) => {
				this.bosses = bosses;
			});

		this._skillService
			.get({ query: 'story=' + environment.story }, { name: 'public' })
			.subscribe((skills) => {
				this.skills = skills;
			});

		this._artifactService
			.get({ query: 'story=' + environment.story }, { name: 'public' })
			.subscribe((artifacts) => {
				this.artifacts = artifacts;
			});
	}
}
