import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '';
  public isAuthenticated: boolean;

  constructor(private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,private accountService: AccountService
  ){
    
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
      this.matIconRegistry.addSvgIcon('paw', this.sanitizer.bypassSecurityTrustResourceUrl('assets/paw.svg'));
  }



  login() {
  }

  logout() {
    this.accountService.deleteToken();
    this.accountService.logout();

  }
}