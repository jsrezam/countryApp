import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();
  @Output()
  public onDeBounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDeBounce.emit(value)
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    if (value.length === 0) return;
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
