import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, fromEvent, Subject, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit, OnDestroy, OnInit {

  opened = true;
  isSmallScreen = false;
  resize$ = new Subject<number>();
  // resize$ = fromEvent(window, 'resize');
  subscription!: Subscription;

  ngOnInit() {
    if (window.innerWidth < 778) {
      this.opened = false;
      this.isSmallScreen = true;
    }
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(target: any) {
    this.resize$.next(target.innerWidth)
  }

  ngAfterViewInit() {
    this.subscription = this.resize$.pipe(
      debounceTime(300),
      tap((width: number) => {
        if (width < 778) {
          this.isSmallScreen = true;
          this.opened = false;
        }
        else {
          this.isSmallScreen = false;
          this.opened = true;
        }
      })
    ).subscribe()
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe()
  }

}
