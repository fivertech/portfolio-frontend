import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';

// Clarity tutorial
import { UiModule } from './ui/ui.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ClarityModule.forRoot(),
		UiModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
