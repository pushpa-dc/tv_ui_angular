import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  images;
  posts: Post[];
  constructor(private dataService:PostService) { }

  ngOnInit() {
    this.dataService.getPost().subscribe(data=>{
      this.posts=data;
      console.log(data)
    });
    // localStorage.setItem(Post, JSON.stringify(post));
  }

}
