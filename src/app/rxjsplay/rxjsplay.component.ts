import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable, Subscription} from 'rxjs';
import {createRandomWordObservable} from './util';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-rxjsplay',
  templateUrl: './rxjsplay.component.html',
  styleUrls: ['./rxjsplay.component.css']
})
export class RxjsplayComponent implements OnInit {

  private intervalObservable: Observable<number>;
  private eventObservable: Observable<Event>;
  private intervalSub: Subscription;
  private randWord: Observable<string>;
  private lowercaseWords: Observable<string>;
  private uppercaseWords: Observable<string>;
  constructor() {
    this.intervalObservable = interval(1000);
    this.eventObservable = fromEvent<Event>(document, 'click');
  }

  ngOnInit() {
    this.intervalSub = this.intervalObservable.subscribe((val) => console.log(val));
    this.eventObservable.subscribe((evt) => console.log(evt));

    setTimeout( () => {
      this.intervalSub.unsubscribe();
    }, 2000);

    this.randWord = createRandomWordObservable().pipe(shareReplay());
    this.lowercaseWords = this.randWord.pipe(map(str => str.toLocaleLowerCase()));
    this.uppercaseWords = this.randWord.pipe(map(str => str.toUpperCase()));

    this.lowercaseWords.subscribe( (word => console.log(word)));
    this.uppercaseWords.subscribe( (word => console.log(word)));
  }

}
