import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, '“When one is pretending the entire body revolts.”','By -Anaïs Nin'),
    new Quote(2, '“Be there for others, but never leave yourself behind.”','By -Dodinsky'),
    new Quote(3, '“Do what you must,And your friends will adjust.”','By -Robert Brault'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
