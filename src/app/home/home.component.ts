import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(private accountService: AccountService) {
    if (this.accountService.getToken()!=null)
      {
        
        if (this.accountService.userValue && !this.accountService.tokenExpired() ) {
          this.isAuthenticated = true;}
        else {
          this.isAuthenticated = false;
          this.accountService.deleteToken()
          
        }  
      }
      else{
        this.isAuthenticated = false;
      }
   }

  ngOnInit(): void {
    
  }
  slides1 =[
    {
      url: '../../assets/ent1.jpg'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    }
  ]
  slides2 =[
    {
      url: 'https://source.unsplash.com/1600x900/?nature,water'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    }
  ]
}
