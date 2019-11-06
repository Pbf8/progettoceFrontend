import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserMyBB} from '../../models/UserMyBB';
import {MyairbbService} from '../../services/myairbb.service';

@Component({
  selector: 'app-usermybbdetail',
  templateUrl: './usermybbdetail.component.html',
  styleUrls: ['./usermybbdetail.component.css']
})
export class UsermybbdetailComponent implements OnInit {
  item: UserMyBB;

  constructor(private route: ActivatedRoute,
  private myairbbService: MyairbbService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.item = {} as UserMyBB;
    this.myairbbService.getUserById(id).subscribe(data => {
      console.log(data);
      this.item = data;
    });
  }

}
