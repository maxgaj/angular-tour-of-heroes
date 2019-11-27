import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map, mergeMapTo, takeUntil, tap} from 'rxjs/operators';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(): void {
    const mouseDrag$ = fromEvent<MouseEvent>(document, 'mousedown').pipe(
      mergeMapTo(
        fromEvent<MouseEvent>(document, 'mousemove').pipe(
          takeUntil(fromEvent<MouseEvent>(document, 'mouseup'))
        )
      )
    );

    mouseDrag$.pipe(
        tap(event => console.log(event)),
        map((event) => `Position = ${event.clientX}px on the X axis and ${event.clientY}px on the Y axis`)
      )
      .subscribe(event => console.log(event));
  }
}
