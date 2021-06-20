import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.less']
})
export class FeatureComponent implements OnInit {
  posts = [ 
  {id:1,title:'Hot Talk With Someone',image:'assets/img/taitanic.jpg',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'},
  {id:2,title:'Hot Talk With Someone',image:'assets/img/taitanic.jpg',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'},
  {id:3,title:'Hot Talk With Someone',image:'assets/img/taitanic.jpg',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'}
];
 
  constructor() { }

  ngOnInit() {
  }

}
