import { Component, Input } from '@angular/core';
import { Storyartifact } from 'src/app/modules/story/interfaces/storyartifact.interface';
import { environment } from 'src/environments/environment';
@Component({
	selector: 'core-artifact',
	templateUrl: './artifact.component.html',
	styleUrls: ['./artifact.component.scss'],
	standalone: false
})
export class ArtifactComponent {
	readonly url = environment.url;

	@Input() artifact: Storyartifact;
}
