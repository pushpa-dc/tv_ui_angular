import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-bhadragol',
  templateUrl: './bhadragol.component.html',
  styleUrls: ['./bhadragol.component.less']
})
export class BhadragolComponent implements OnInit {
  curDate=new Date();
  title0="Bhadragol Episodes"
  title1="Meribassai Episodes"
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
