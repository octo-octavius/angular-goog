import {Observable, Observer} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';

const WORDS = [
  'SMELL',
  'Arctic',
  'Wall',
  'SOCCER',
  'Rovers',
  'BULB',
];

export interface FavWord {
  word: string;
  meaning: string;
}

export function isValidFavWord(word: FavWord): boolean {
  return word.meaning && word.word && word.meaning.trim().length !== 0 && word.meaning.trim().length !== 0;
}

export function upperCased(word: FavWord): FavWord {
  console.log(word);
  return {
    word: word.word.toUpperCase(),
    meaning: word.meaning.toUpperCase(),
  };
}

export function createRandomWordObservable(): Observable<string> {
  return new Observable((observer: Observer<string>) => {
    console.log('Observable created');
    setInterval(() => {
      const randIndex: number = Math.floor(Math.random() * WORDS.length);
      observer.next(WORDS[randIndex]);
    }, 1000);
  });
}

export function printVal(val: any) {
  console.log(val);
}

export function postToFavWords(word: FavWord): Observable<any> {
  return fromPromise(fetch('https://test-app-angular-4313d.firebaseio.com/fav-words.json', {
    method: 'POST',
    body: JSON.stringify(word),
    headers: {
      'content-type': 'application-json'
    }
  }));
}

export function getFavWords() {
  const abortController = new AbortController();
  return new Observable((observer => {
    fetch('https://test-app-angular-4313d.firebaseio.com/fav-words.json/', {
      method: 'GET',
      headers: {
        'content-type': 'application-json'
      },
      signal: abortController.signal
    }).then((val) => {
      observer.next(val);
    }).catch(err => {
      observer.error(err);
    }).finally(() => {
      observer.complete();
    });

    return () => {
      abortController.abort();
    };
  }));
}
