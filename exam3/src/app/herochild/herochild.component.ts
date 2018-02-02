import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

interface AppState {
  counter: number
}

@Component({
  selector: 'app-herochild',
  templateUrl: './herochild.component.html',
  styleUrls: ['./herochild.component.css']
})
export class HerochildComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    // sets it to reference in store, selecting state 'counter'
    this.counter$ = this.store.select('counter');
  }
  
  toHighlight:boolean;

  @Input('name') name:string;
  @Input('id') id:number;
  @Input('index') index: number

  @Output() onVoted = new EventEmitter<String>();

  private counter$: Observable<number>;
  


  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }
  
  vote(voteName:string) {
    this.onVoted.emit(voteName);
    console.log("Voted "+voteName+":"+this.name);
    
  }

  ngOnInit() {
    this.toHighlight = this.index%2===0;

  }

}
