import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  person: Person;
  constructor(
      private personService: PersonService,
      private route: ActivatedRoute,
      ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.personService.getPerson(id)
        .subscribe(person => this.person = person);
    });
  }

}
