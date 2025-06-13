import { Component, Input } from '@angular/core';
import { Storyskill } from 'src/app/modules/story/interfaces/storyskill.interface';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'core-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.scss'],
	standalone: false
})
export class SkillComponent {
	readonly url = environment.url;

	@Input() skill: Storyskill;
}
