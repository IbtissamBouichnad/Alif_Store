import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() titre:string='titre';
  @Input() age:string='age';
  @Input() description:string='description';
  @Input() prix:string='prix';
  @Input() status:boolean=false;
  @Input() index: number = 0;

  @Output() heartClicked: EventEmitter<number> = new EventEmitter<number>(); 

  onHeartButtonClick(): void {
    this.heartClicked.emit(this.index); 
  }
}
