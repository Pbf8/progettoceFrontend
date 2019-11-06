import { ApartamentMyBB } from './../../models/apartament-my-bb';
import { Component, OnInit } from '@angular/core';
import {UserMyBB} from '../../models/UserMyBB';
import {MyairbbService} from '../../services/myairbb.service';
import {BookingMyBB} from '../../models/BookingMyBB';

@Component({
  selector: 'app-usermybb',
  templateUrl: './usermybb.component.html',
  styleUrls: ['./usermybb.component.css']
})
export class UsermybbComponent implements OnInit {
  newUser: UserMyBB;
  users: UserMyBB[];
  apartment: ApartamentMyBB[];

  booking: BookingMyBB;

  constructor(private myairbbService: MyairbbService) { }

  ngOnInit() {
    this.myairbbService.getBookingByIDApig(1).subscribe(data => {
      console.log(data);
      this.booking = data;
    })

    this.newUser = {} as UserMyBB;

    this.users = [];
    this.myairbbService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
    
    this.apartment = [];
    this.myairbbService.getAllApartament().subscribe(data2 => {
      console.log(data2);
      this.apartment = data2;
    });

  }

  addNewUser() {
    this.myairbbService.postUser(this.newUser).subscribe(data => {
      console.log(data);
    });
  }

}
