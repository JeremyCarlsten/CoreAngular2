import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Person } from './person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // For methods for Observables


@Injectable()
export class PersonService {
  private server: string = 'http://localhost:8081';
  constructor(private http: Http) { }


  getPeople(term: string): Observable<Person[]> {
    return this.http.get(this.server + '/people/' + term)
      .map((res) => res.json())
      .map(({people}) => {
        for (let person of people){
          person.birthDate = new Date(person.birthDate);
        }
        return people;
      });
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get(this.server + '/person/' + id)
      .map((res) => res.json())
      .map(({person}) => {
        person.birthDate = new Date(person.birthDate);
        return person;
      });
  }
}
