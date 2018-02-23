import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { NgwWowService } from "ngx-wow";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Fiver.tech";

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        // Reload WoW animations when done navigating to page,
        // but you are free to call it whenever/wherever you like
        this.wowService.init();
      });
  }
}
