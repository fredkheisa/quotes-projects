import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
})
export class LikeComponent implements OnInit {

  numberOfLikes:number;

  constructor() { }

  ngOnInit() {
  }

}
