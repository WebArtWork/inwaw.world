import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'src/app/core/modules/button/button.module';
import { Tab } from './tab.interface';

@Component({
	imports: [CommonModule, ButtonModule],
	selector: 'wtab',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})
export class TabComponent {
	@Input() tabs: Tab[];

	clear() {
		for (const tab of this.tabs) {
			tab.active = false;
		}
	}
}
