import {Component, OnInit} from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';
import { Contact } from '../model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  contactList:any=[];
  _contact:Contact;
  _contactForm: FormGroup;
  _isContactFormInValid:boolean;
  emailptn = /^(([^<>()[\]\\.,;!@$%#:\s@\"]+(\.[^<>()[\]\\.,;#!@$%:\s@  \"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public _toasterService: ToastrManager,
              public socialAuthServive: SocialAuthService) {
                this._contactForm = formBuilder.group({
                  firstName: new FormControl(null, [Validators.required]),
                  lastName: new FormControl(null, [Validators.required]),
                  email: new FormControl(null, [Validators.required, Validators.maxLength(256), Validators.pattern(this.emailptn)]),
                  message: new FormControl(null, [Validators.required])
                 
                });
  }
  ngOnInit() {
    this._contact = new Contact();
  }


  SubmittContacts(){
    if (this._contactForm.invalid) {
      this._isContactFormInValid = true;
    }else{
      this._isContactFormInValid = false;
      let toDayDate = new Date();
      this._contact.CreatedDt = (toDayDate.getMonth() + 1) + '/' + toDayDate.getDate() + '/' + toDayDate.getFullYear();
      this.contactList.push(this._contact);
      if (localStorage.hasOwnProperty('contactList')) {
        let existDataList = JSON.parse(localStorage.getItem('contactList'));
        for(let i=0;i<existDataList.length;existDataList++){
          this.contactList.push(existDataList[i]);
        }
    }
      
      localStorage.setItem('contactList',JSON.stringify(this.contactList));
      this._toasterService.successToastr('Contact Created SuccessFully');
      this._contact = new Contact();
    }
  }

  goToContactPage(){
    this.router.navigate(['/mainpage'])
  }

  goToAnalyticsPage(){
    this.router.navigate(['/analytics'])
  }

  logOut(){
    this.router.navigate(['/login'])
  }
}
