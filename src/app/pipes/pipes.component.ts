import {Component, OnInit} from '@angular/core';

interface ServerStatus {
  readonly name: string;
  readonly lastOnline: Date;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  readonly serverStatuses: ServerStatus[];

  constructor() {
    this.serverStatuses = [
      {name: 'Server1', lastOnline: new Date(2019, 1, 2)},
      {name: 'Server2', lastOnline: new Date(2019, 2, 2)},
    ];
  }

  ngOnInit() {
  }

}
