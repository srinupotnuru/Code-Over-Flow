import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs:any[] = [];
  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs()
  {
    this.blogService.getAllBlogs().subscribe((res)=>{
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
