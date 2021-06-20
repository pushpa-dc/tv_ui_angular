import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-item-small',
  templateUrl: './item-small.component.html',
  styleUrls: ['./item-small.component.css']
})
export class ItemSmallComponent implements OnInit {
  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }

}
