import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { ButtonModule } from 'src/app/core/modules/button/button.module';
import { InputModule } from 'src/app/core/modules/input/input.module';
import { CardModule } from 'src/app/core/modules/card/card.module';
import { TableModule } from './modules/table/table.module';
import { IconsModule } from './icons/icons.module';
import { TranslateModule } from './modules/translate/translate.module';
import { FormcomponentsModule } from './formcomponents/formcomponents.module';
import { SelectModule } from './modules/select/select.module';
import { FormModule } from './modules/form/form.module';
/* imports */
import { SkillComponent } from './components/skill.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { BossComponent } from './components/boss/boss.component';
import { CharacterComponent } from './components/character/character.component';

const components: Type<any>[] = [
	/* components */
	SkillComponent,
	ProfileComponent,
	ArtifactComponent,
	BossComponent,
	CharacterComponent
];

const selectors: Type<any>[] = [
	/* selectors */
];

const pipes: Type<any>[] = [
	/* pipes */
];

@NgModule({
	declarations: components.concat(selectors).concat(pipes),
	exports: [
		TranslateModule,
		SelectModule,
		CommonModule,
		FormsModule,
		WacomModule,
		ButtonModule,
		InputModule,
		CardModule,
		FormModule,
		TableModule,
		IconsModule
	]
		.concat(components)
		.concat(selectors)
		.concat(pipes),
	imports: [
		TranslateModule,
		FormcomponentsModule,
		SelectModule,
		CommonModule,
		FormsModule,
		WacomModule
	]
})
export class CoreModule {}
