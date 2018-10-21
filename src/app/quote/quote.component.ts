import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  numberOfLikes:number = 0;
  
  likeButtonClick(){
    this.numberOfLikes++;

  }

  dislikeButtonClick(){
    this.numberOfLikes--;
  }


  quotes = [
    new Quote(1, '“When one is pretending the entire body revolts.”', 'By -Anaïs Nin', new Date(2019, 3, 14) ),
    new Quote(2, '“Be there for others, but never leave yourself behind.”', 'By -Dodinsky', new Date(2019, 6, 9)  ),
    new Quote(3, '“Do what you must,And your friends will adjust.”', 'By -Robert Brault', new Date(2019, 1, 12) ),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}


  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }
  ngOnInit() {
  }
}