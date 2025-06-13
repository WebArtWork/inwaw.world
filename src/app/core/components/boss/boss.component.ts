import { Component, Input } from '@angular/core';
import { Storyboss } from 'src/app/modules/story/interfaces/storyboss.interface';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'core-boss',
	templateUrl: './boss.component.html',
	styleUrls: ['./boss.component.scss'],
	standalone: false
})
export class BossComponent {
	readonly url = environment.url;

	@Input() boss: Storyboss;
}
