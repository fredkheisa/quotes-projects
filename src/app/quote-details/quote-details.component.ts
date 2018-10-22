import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Quote from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;

  }

  dislikeButtonClick() {
    this.numberOfDislikes++;
  }

  @Input() quote: Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
