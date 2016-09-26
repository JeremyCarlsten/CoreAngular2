import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import 'rxjs/Rx'; // For methods for Observables

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public people: Person[] = [];
  public predicate;
  public reverse = false;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.checkSearch('bill');
  }

  checkSearch(term: string) {
    if (term.length < 2) {
      this.people = [];
    } else {
        this.personService.getPeople(term)
        .subscribe((people) => this.people = people);
    }
  }

  arrow(column: string) {
    if (this.reverse && this.predicate === column){
      return '▲';
    }
    if (!this.reverse && this.predicate === column){
      return '▼';
    }
  }

  toggleSortOrder(column) {
    if (column !== this.predicate) {
      this.predicate = column;
      this.people.sort((itemOne, itemTwo) =>
        (itemOne[column] < itemTwo[column]) ? -1 :
        (itemOne[column] > itemTwo[column]) ? 1 : 0
      );
    }else {
        this.people.reverse();
        this.reverse = !this.reverse;
    }
  }
}
