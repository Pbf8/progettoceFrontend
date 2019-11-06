import {Component, OnInit, ViewChild} from '@angular/core';
import {Commenti} from '../../models/Commenti';
import {CommentiService} from '../../services/commenti.service';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {
  commenti: Commenti[];
  commento: Commenti;

  @ViewChild('title')title;
  @ViewChild('body')body;

  constructor(private commentiService: CommentiService) { }

  ngOnInit() {
    this.commento = {} as Commenti;

    this.commentiService.getCommenti().subscribe(data => {
      console.log(data);
      this.commenti = data;
    });
  }

  onSubmit() {
    console.log(this.title.value, this.body.value);

    const newCommento: Commenti = {} as Commenti;
    newCommento.body = this.body.value;
    newCommento.title = this.title.value;

    this.commentiService.postCommenti(newCommento).subscribe(data => {
      console.log(data);
    });
  }

}
