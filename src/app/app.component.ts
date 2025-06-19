import { Component } from '@angular/core';
import { SafeArea } from '@capacitor-community/safe-area';

SafeArea.enable({
	config: {
		customColorsForSystemBars: true,
		statusBarColor: '#00000000', // transparent
		statusBarContent: 'light',
		navigationBarColor: '#00000000', // transparent
		navigationBarContent: 'light'
	}
});

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: false
})
export class AppComponent {}
