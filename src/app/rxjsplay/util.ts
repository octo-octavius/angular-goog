import {Observable, Observer} from 'rxjs';

const WORDS = [
  'SMELL',
  'Arctic',
  'Wall',
  'SOCCER',
  'Rovers',
  'BULB',
];

export function createRandomWordObservable(): Observable<string> {
  return new Observable( (observer: Observer<string>) => {
    console.log('Observable created');
    setInterval(() => {
      const randIndex: number = Math.floor(Math.random() * WORDS.length);
      observer.next(WORDS[randIndex]);
    }, 1000);
  });
}
