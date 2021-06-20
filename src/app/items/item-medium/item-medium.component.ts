import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-item-medium',
  templateUrl: './item-medium.component.html',
  styleUrls: ['./item-medium.component.css']
})
export class ItemMediumComponent implements OnInit {
  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }

}
