import { Component, Input } from '@angular/core';
import { Storyboss } from 'src/app/modules/story/interfaces/storyboss.interface';

@Component({
	selector: 'core-boss',
	templateUrl: './boss.component.html',
	styleUrls: ['./boss.component.scss'],
	standalone: false
})
export class BossComponent {
	@Input() boss: Storyboss;
}
