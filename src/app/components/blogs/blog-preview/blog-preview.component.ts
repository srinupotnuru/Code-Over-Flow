import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../services/blog.service';
@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  constructor(private route:ActivatedRoute, private blogService:BlogService) { }
  blog:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogService.getBlog((params as any).blogId).subscribe(res=>{
        this.blog = res.data
      })
    })
  }

}
