import {Component, OnInit} from '@angular/core';
import {fromEvent, merge} from 'rxjs';
import {filter, map, mergeMapTo, switchMapTo, takeUntil, tap} from 'rxjs/operators';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  pointerPosition$;
  keyboardUpAndDown$;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.pointerPosition$ = fromEvent<MouseEvent>(document, 'mousedown').pipe(
      mergeMapTo(
        fromEvent<MouseEvent>(document, 'mousemove').pipe(
          takeUntil(fromEvent<MouseEvent>(document, 'mouseup'))
        )
      )
    ).pipe(
      tap(event => console.log(event)),
      map(event => ({
        x: event.clientX,
        y: event.clientY
      }))
    );

    const keyboardAction$ = fromEvent<KeyboardEvent>(document, 'keydown');

    const keyboardUp$ = keyboardAction$.pipe(
      filter((event: KeyboardEvent) => event.key === 'ArrowUp'),
      switchMapTo(this.heroService.getHeroes()),
      map(heroes => heroes[0]),
      map((hero: Hero) => hero.name)
    );

    const keyboardDown$ = keyboardAction$.pipe(
      filter((event: KeyboardEvent) => event.key === 'ArrowDown'),
      switchMapTo(this.heroService.getHeroes()),
      map((heroes: Hero[]) => heroes[heroes.length - 1]),
      map((hero: Hero) => hero.name)
    );


    this.keyboardUpAndDown$ = merge(keyboardUp$, keyboardDown$);
    this.keyboardUpAndDown$.subscribe(event => console.log(event));

  }
}
