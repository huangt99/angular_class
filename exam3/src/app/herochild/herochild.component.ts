import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-herochild',
  templateUrl: './herochild.component.html',
  styleUrls: ['./herochild.component.css']
})
export class HerochildComponent implements OnInit {

  constructor() { }
  toHighlight:boolean;

  @Input('name') name:string;
  @Input('id') id:number;
  @Input('index') index: number

  @Output() onVoted = new EventEmitter<String>();

  vote(voteName:string) {
    this.onVoted.emit(voteName);
    console.log("Voted "+voteName+":"+this.name);
    
  }

  ngOnInit() {
    this.toHighlight = this.index%2===0;

  }

}
