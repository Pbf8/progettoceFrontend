import { Component, OnInit } from '@angular/core';

import { ApartamentMyBB } from './../../models/apartament-my-bb';
import {UserMyBB} from '../../models/UserMyBB';
import {MyairbbService} from '../../services/myairbb.service';
import {BookingMyBB} from '../../models/BookingMyBB';
import { ExperienceMyBB } from 'src/app/models/experience-my-bb';
@Component({
  selector: 'app-adminexperiences',
  templateUrl: './adminexperiences.component.html',
  styleUrls: ['./adminexperiences.component.scss']
})
export class AdminexperiencesComponent implements OnInit {



  experience: ExperienceMyBB[];
  

  

  constructor(private myairbbService: MyairbbService) { }

  ngOnInit() {
    
    this.experience=[];
    this.myairbbService.getAllExperience().subscribe(data2 => {
      console.log(data2);
      this.experience = data2;
    });

  }


  }


