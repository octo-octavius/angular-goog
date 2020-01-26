import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {concat, fromEvent, interval, Observable, of, Subscription} from 'rxjs';
import {isValidFavWord, postToFavWords, printVal, upperCased} from './util';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map
} from 'rxjs/operators';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-rxjsplay',
  templateUrl: './rxjsplay.component.html',
  styleUrls: ['./rxjsplay.component.css']
})
export class RxjsplayComponent implements OnInit {

  @ViewChild('f', {static: true}) form: NgForm;
  @ViewChild('searchBox', {static: true}) searchBox: ElementRef;

  private intervalObservable: Observable<number>;
  private eventObservable: Observable<Event>;
  private intervalSub: Subscription;
  private randWord: Observable<string>;
  private lowercaseWords: Observable<string>;
  private uppercaseWords: Observable<string>;
  private firstArrayObservable: Observable<number>;
  private secondArrayObservable: Observable<number>;
  private cancelableObservable: Observable<any>;


  constructor() {
    this.intervalObservable = interval(1000);
    this.eventObservable = fromEvent<Event>(document, 'click');
  }

  ngOnInit() {
    // this.intervalSub = this.intervalObservable.subscribe((val) => console.log(val));
    // this.eventObservable.subscribe((evt) => console.log(evt));
    //
    // setTimeout( () => {
    //   this.intervalSub.unsubscribe();
    // }, 2000);
    //
    // this.randWord = createRandomWordObservable().pipe(shareReplay());
    // this.lowercaseWords = this.randWord.pipe(map(str => str.toLocaleLowerCase()));
    // this.uppercaseWords = this.randWord.pipe(map(str => str.toUpperCase()));
    //
    // this.lowercaseWords.subscribe( (word => console.log(word)));
    // this.uppercaseWords.subscribe( (word => console.log(word)));
    //

    this.firstArrayObservable = of(1, 2, 3);
    this.secondArrayObservable = of(4, 5, 6);
    concat(this.firstArrayObservable, this.secondArrayObservable).subscribe(printVal);
    concat(this.firstArrayObservable, this.secondArrayObservable)
      .pipe(filter(val => val % 2 === 0)).subscribe(printVal);

    // this.form.valueChanges.pipe(
    //   filter(isValidFavWord),
    //   map(upperCased),
    //   throttle(() => interval(1000)),
    //   mergeMap(changes => postToFavWords(changes))
    // ).subscribe();
    //
    // this.form.valueChanges.pipe(
    //   filter(isValidFavWord),
    //   map(upperCased),
    //   exhaustMap(changes => postToFavWords(changes))
    // ).subscribe();

    this.form.valueChanges.pipe(
      filter(isValidFavWord),
      map(upperCased),
      concatMap(changes => postToFavWords(changes))
    ).subscribe();

    fromEvent(this.searchBox.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
        debounceTime(1000), distinctUntilChanged()
      )
      .subscribe(printVal);
  }

  onSubmit() {
    postToFavWords({
      word: 'haha',
      meaning: 'type of laughter'
    }).subscribe(res => console.log(res));
  }


  launchCancellableHttpObservable() {
    // const sub = getFavWords().subscribe(printVal);
    // sub.unsubscribe();
    // getFavWords().pipe( debounceTime)
  }
}
