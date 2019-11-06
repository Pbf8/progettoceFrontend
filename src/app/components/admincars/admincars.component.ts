import { Component, OnInit } from '@angular/core';
import { CarMyBb } from '../../models/car-my-bb';
import {UserMyBB} from '../../models/UserMyBB';
import {MyairbbService} from '../../services/myairbb.service';
import {BookingMyBB} from '../../models/BookingMyBB';

@Component({
  selector: 'app-admincars',
  templateUrl: './admincars.component.html',
  styleUrls: ['./admincars.component.scss']
})
export class AdmincarsComponent implements OnInit {

  newUser: UserMyBB;
  users: UserMyBB[];
  car: CarMyBb[];

  booking: BookingMyBB;

  constructor(private myairbbService: MyairbbService) { }

  ngOnInit() {
   /*  this.myairbbService.getBookingByIDApig(1).subscribe(data => {
      console.log(data);
      this.booking = data;
    })

    this.newUser = {} as UserMyBB;

    this.users = [];
    this.myairbbService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    }) */


    this.car = [];
    this.myairbbService.getAllCar().subscribe(data2 => {
      console.log(data2);
      this.car = data2;
    });

    



  }

}