import { Component } from '@angular/core';
import { InwawworldService } from 'src/app/core/services/inwawworld.service';

@Component({
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss'],
	standalone: false
})
export class LibraryComponent {
	tab = 'Characters';

	tabs = [
		{
			name: 'Characters',
			icon: 'person',
			click: () => {
				this.tab = 'Characters';
			}
		},
		{
			name: 'Bosses',
			icon: 'sports_martial_arts',
			click: () => {
				this.tab = 'Bosses';
			}
		},
		{
			name: 'Skills',
			icon: 'psychology',
			click: () => {
				this.tab = 'Skills';
			}
		},
		{
			name: 'Artifacts',
			icon: 'inventory_2',
			click: () => {
				this.tab = 'Artifacts';
			}
		}
	];

	constructor(public iww: InwawworldService) {}
}
