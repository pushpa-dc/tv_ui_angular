import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-single-content',
  templateUrl: './single-content.component.html',
  styleUrls: ['./single-content.component.css']
})
export class SingleContentComponent implements OnInit {
@Input() post:Post;
  images:any;
  posts:Post[];
  constructor(private dataService:PostService) { }

  ngOnInit() {
    this.dataService.getPost().subscribe(data=>{
      this.posts=data;
      console.log(data)
    });
  }

}
