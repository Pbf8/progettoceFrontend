import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../models/User';
import {tsStructureIsReused} from '@angular/compiler-cli/src/transformers/util';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('userForm') userForm: any;
  @ViewChild('newUserFirstName') newUserFN;
  @ViewChild('newUserLastName') newUserLN;
  @ViewChild('newUserAge') newUserAge;

  newUser: User;

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

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      console.log(data);
    })

    this.newUser = {
      firstname: '',
      lastname: '',
      age: 0,
      address: {
        city: '',
        street: ''
      },
      showdetails: false
    };

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

    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });

    /*this.users = [
      {
        firstname: 'Marge',
        lastname: 'Simpson',
        age: 38,
        address: {
          city: 'Roma',
          street: 'via Lecce 2'
        },
        showdetails: true
      },
      {
        firstname: 'Lisa',
        lastname: 'Simpson',
        age: 7,
        address: {
          city: 'Roma',
          street: 'via Lecce 2'
        },
        showdetails: false
      },
      {
        firstname: 'Meggie',
        lastname: 'Simpson',
        age: 2,
        address: {
          city: 'Roma',
          street: 'via Lecce 2'
        },
        showdetails: true
      }
    ];*/

    /*this.addNewUser({
      firstname: 'Homer',
      lastname: 'Simpson',
      age: 45,
      address: {
        city: 'Roma',
        street: 'via Lecce 2'
      }
    });*/

    console.log('Hello ' + this.firstname + ' ' + this.lastname);

    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);

    // this.users = [];

  }

  addNewUser() {
    // this.users.push(newuser); => bottom
    // newuser.showdetails = false;
    this.users.unshift(this.newUser); // => top
  }

  hasBirthday() {
    this.age += 1;
  }

  onFireEvent(e) {
    console.log(e.type);
  }

  showHideDetails(user: User) {
    user.showdetails = !user.showdetails;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log('123');
    if(valid) {
      console.log(value.firstname, value.lastname);
      this.users.unshift(value);
    } else {
      console.log('Not valid');
    }

  }

  onSubmit2() {
    const usertemp: User = {} as User;
    usertemp.firstname = this.newUserFN.value;
    usertemp.lastname = this.newUserLN.value;
    usertemp.age = this.newUserAge.value;

    this.dataService.postUser(usertemp);
  }


}
