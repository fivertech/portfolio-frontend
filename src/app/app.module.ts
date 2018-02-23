import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Bootstrap modules
import { AlertModule } from 'ngx-bootstrap';

// Pages components
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { ContactoComponent } from "./contacto/contacto.component";

// Animation module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgwWowModule } from "ngx-wow";

// Rutas
import { AppRoutingModule } from ".//app-routing.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "contacto", component: ContactoComponent },
  { path: "inicio", component: InicioComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    ContactoComponent,
    InicioComponent,
    PageNotFoundComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    NgwWowModule.forRoot(),
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
