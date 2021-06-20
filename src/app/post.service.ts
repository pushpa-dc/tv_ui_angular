import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
appUrl='https://www.osnepal.com/wp-json/appharurest/v2/posts/2/2'
  constructor(private http:HttpClient) { }
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.appUrl);
  }
}
