import { Component, OnInit } from '@angular/core';
import { ApartamentMyBB } from './../../models/apartament-my-bb';
import {UserMyBB} from '../../models/UserMyBB';
import {MyairbbService} from '../../services/myairbb.service';
import {BookingMyBB} from '../../models/BookingMyBB';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  newUser: UserMyBB;
  users: UserMyBB[];
  apartment: ApartamentMyBB[];
  clickedPending: boolean;
  clickedAll: boolean;

  booking: BookingMyBB;

  constructor(private myairbbService: MyairbbService) { }

  ngOnInit() {
    
    
    this.apartment = [];
    this.myairbbService.getAllApartament().subscribe(data2 => {
      console.log(data2);
      this.apartment = data2;
      
    });
    this.clickedAll=true;

  }

  showPendingApartment(){
    this.apartment = [];
    this.myairbbService.getAllApartamentPending().subscribe(data2 => {
      console.log(data2);
      this.apartment = data2;
      this.clickedAll= false;
      this.clickedPending =true;
    });

  }

  showAllApartment(){
    this.apartment = [];
    this.myairbbService.getAllApartament().subscribe(data2 => {
      console.log(data2);
      this.apartment = data2;
      this.clickedPending= false;
      this.clickedAll = true;

      

    });

  }
  
}
