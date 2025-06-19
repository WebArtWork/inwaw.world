import { Component } from '@angular/core';
import { SafeArea } from '@capacitor-community/safe-area';
import { Capacitor } from '@capacitor/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: false
})
export class AppComponent {
	constructor() {
		window.addEventListener('DOMContentLoaded', async () => {
			if (Capacitor.isNativePlatform()) {
				await SafeArea.enable({
					config: {
						customColorsForSystemBars: true,
						statusBarColor: '#00000000', // transparent
						statusBarContent: 'light',
						navigationBarColor: '#00000000', // transparent
						navigationBarContent: 'light'
					}
				});
			}
		});
	}
}
