import { PostService } from './../post.service';
import { Post } from './../models/Post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.less']
})

export class LatestComponent implements OnInit {
  @Input() post:Post;
  curDate=new Date();
  title="Latest Episode"
  images:any;
  posts:Post[];

  constructor(private dataService:PostService) { }

  ngOnInit() {
    this.dataService.getPost().subscribe(data=>{
      this.posts=data;
      console.log(data.length)
    });
  }

  myClick(Post)
  {
    alert(this.post);
  }

}
