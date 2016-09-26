import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'; // For methods for Observables

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  server = 'http://localhost:8081';
  people = [];

  constructor(private https: Http) {
  }


  checkSearch(term: string) {
    if (term.length < 2) {
      this.people = [];
    } else {
      this.https.get(this.server + '/people/' + term)
        .map((res) => res.json())
        .subscribe((response) => {
          this.people = response.people;
        });
    }
  }
}
