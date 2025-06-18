import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './core/theme/guest/guest.component';
import { PublicComponent } from './core/theme/public/public.component';
import { UserComponent } from './core/theme/user/user.component';
// config
import { environment } from 'src/environments/environment';
import { MetaGuard, WacomModule } from 'wacom';
// guards
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminsGuard } from './core/guards/admins.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/guess',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'license',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'License'
					}
				},
				loadChildren: () =>
					import('./pages/guest/license/license.module').then(
						(m) => m.LicenseModule
					)
			},
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: PublicComponent,
		children: [
			/* user */
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: '',
		component: PublicComponent,
		children: [
			{
				path: 'privacy',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Privacy'
					}
				},
				loadChildren: () =>
					import('./pages/guest/privacy/privacy.module').then(
						(m) => m.PrivacyModule
					)
			},
			{
				path: 'artifact',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Artifact'
					}
				},
				loadChildren: () =>
					import('./pages/guest/artifact/artifact.module').then(
						(m) => m.ArtifactModule
					)
			},
			{
				path: 'library',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Library'
					}
				},
				loadChildren: () =>
					import('./pages/guest/library/library.module').then(
						(m) => m.LibraryModule
					)
			},
			{
				path: 'guess',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Guess character'
					}
				},
				loadChildren: () =>
					import('./pages/guest/guess/guess.module').then(
						(m) => m.GuessModule
					)
			},
			{
				path: 'boss',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Boss'
					}
				},
				loadChildren: () =>
					import('./pages/guest/boss/boss.module').then(
						(m) => m.BossModule
					)
			},
			{
				path: 'skill',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Skill'
					}
				},
				loadChildren: () =>
					import('./pages/guest/skill/skill.module').then(
						(m) => m.SkillModule
					)
			},
			{
				path: 'character',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Character'
					}
				},
				loadChildren: () =>
					import('./pages/guest/character/character.module').then(
						(m) => m.CharacterModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'guess',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent,
		PublicComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					favicon: environment.meta.favicon,
					description: environment.meta.description,
					titleSuffix: ' | ' + environment.meta.suffix,
					'og:image': environment.meta.image
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
