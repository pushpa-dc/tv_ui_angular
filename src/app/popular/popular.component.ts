import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.less']
})
export class PopularComponent implements OnInit {
  curDate=new Date();
  title="Popular"

  posts=[
    {id:1,title:"Nepals Got Talent",cat:"New",image:'https://upload.wikimedia.org/wikipedia/commons/2/28/Bhadragol_logo.JPG',},
    {id:2,title:"Bhadragol",cat:"Premier",image:'https://i.ytimg.com/vi/H11pMNNi3rM/hqdefault.jpg'},
    {id:2,title:"Meri Bassai",cat:"Trailer",image:'https://southasiarev.files.wordpress.com/2011/09/martyrs_memorial_celebration_maoist_nepal_crowd_pla.jpg'},
    // {id:2,title:"Hamro Nepal",cat:"New",image:'http://www.ecotripnepal.com/assets/images/langtang/jugal-himal-trek.jpg'},
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
