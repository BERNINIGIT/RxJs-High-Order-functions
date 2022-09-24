import './style.css';

import {
  of,
  concat,
  delay,
  switchMap,
  tap,
  concatMap,
  mergeMap,
  exhaustMap,
} from 'rxjs';

concat(
  of(1).pipe(delay(1000)),
  of(2).pipe(delay(1000)),
  of(3).pipe(delay(1000))
)
  .pipe(
    //concatMap((a) =>
    //mergeMap((a) =>
    //switchMap((a) =>
    exhaustMap((a) =>
      concat(
        of(10).pipe(delay(1000)),
        of(10).pipe(delay(1000)),
        of(10).pipe(delay(1000))
      ).pipe(tap((b) => console.log(`a:${a},b:${b}`)))
    )
  )
  .subscribe();

// Open the console in the bottom right to see results.
