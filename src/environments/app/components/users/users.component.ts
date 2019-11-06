import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import {tsStructureIsReused} from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  firstname: string;
  lastname: string;
  age: number;
  address: {
    city: string,
    street: string
  };

  user: User;
  users: User[];

  showEnabled: boolean;

  mycustomclass = {};

  constructor() { }

  ngOnInit() {
    this.showEnabled = true;

    this.mycustomclass = {
      'btn-success': this.showEnabled,
      'btn-uppertext': this.showEnabled
    };

    this.firstname = 'Adriana';
    this.lastname = 'Caione';
    this.age = 25;
    this.address = {
      city: 'Lecce',
      street: 'via Monteroni'
    };

    this.user = {
      firstname: 'Bart',
      lastname: 'Simpson',
      age: 10,
      address: {
        city: 'Roma',
        street: 'via Lecce 2'
      }
    };


    this.users = [
      {
        firstname: 'Marge',
        lastname: 'Simpson',
        age: 38,
        address: {
          city: 'Roma',
          street: 'via Lecce 2'
        }
      },
      {
        firstname: 'Lisa',
        lastname: 'Simpson',
        age: 7,
        address: {
          city: 'Roma',
          street: 'via Lecce 2'
        }
      },
      {
        firstname: 'Meggie',
        lastname: 'Simpson',
        age: 2,
        address: {
          city: 'Roma',
          street: 'via Lecce 2'
        }
      }
    ];

    this.addNewUser({
      firstname: 'Homer',
      lastname: 'Simpson',
      age: 45,
      address: {
        city: 'Roma',
        street: 'via Lecce 2'
      }
    });

    console.log('Hello ' + this.firstname + ' ' + this.lastname);

    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);

    // this.users = [];

  }

  addNewUser(newuser: User) {
    // this.users.push(newuser); => bottom
    this.users.unshift(newuser); // => top
  }

  hasBirthday() {
    this.age += 1;
  }

}
