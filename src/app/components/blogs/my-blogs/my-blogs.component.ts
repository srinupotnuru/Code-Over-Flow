import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent implements OnInit {

  blogs:any[] = [];
  user:any;
  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
    this.getBlogs();
  }

  getBlogs()
  {
    this.blogService.getMyBlogs(this.user._id).subscribe((res:any)=>{
      this.blogs = res.data
      for(let item of this.blogs)
      {
        item.timeFromNow = moment(item.createdAt).fromNow()
      }
    });
  }

  gotoBlog(blogId:string)
  {
    this.router.navigate(['home/blog-preview', {blogId:blogId}]);
  }

}
