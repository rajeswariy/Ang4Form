import { Component } from '@angular/core';
//for reactive forms below import
import { FormBuilder,FormGroup,Validators} from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  //property for our submitted form 
  rForm: FormGroup;
  post:any;
  description:string='';
  name:string='';
    titleAlert:string ='This field is required';
  
  constructor(private fb: FormBuilder){
    this.rForm=fb.group({
      'name':[null,Validators.required],
      'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
      'validate':''
    
    });
  }
  
  ngOnInit(){
    this.rForm.get('validate').valueChanges.subscribe(
    (validate)=> {
      if(validate=='1'){
        this.rForm.get('name').setValidators([Validators.required,Validators.minLength(3)]);
        this.titleAlert="u need to specify atlst 3 chars";
      }else{
        this.rForm.get('name').setValidators(Validators.required);
      }
      this.rForm.get('name').updateValueAndValidity();
    }
      
    )
    
  }
  
  //custom method
  addPost(post){
    this.description=post.description;
    this.name=post.name;
    
  }
  
  
}
