import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from '../../../services/blog.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  name!:string;
  blog!:string;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  constructor( private blogService:BlogService, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  postBlog()
  {
    const user:any = JSON.parse(sessionStorage.getItem('user') as any);
    
    const blog:any = {
      contributedBy : user._id,
      name : this.name,
      blog : this.blog
    }
    
    this.blogService.createBlog(blog).subscribe((data)=>{
      
      if(data.success)
      {
        this.toaster.success('Question added successfully');
        this.resetForm();
      }
      else{
        this.toaster.error("Error in creating question");
        this.resetForm();
      }
    })
  }

  resetForm()
  {
    this.name = "";
    this.blog = "";
  }

}
