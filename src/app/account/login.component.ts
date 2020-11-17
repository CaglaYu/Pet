import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html',styleUrls: ['login.component.css'] })

export class LoginComponent implements OnInit {
    firstError :string;
    public isVisible: boolean = false;
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    messageText:string;
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }
    hide = true;
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), 
                Validators.pattern('[a-zA-Z0-9]+')]],
            password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(30)]]
    
        });
        
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    setHide(){
        this.hide = !this.hide; 
        setTimeout(() => {this.hide = true;}, 1300);
    }
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        


        
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    debugger;
                    this.accountService.setToken(data['token']);
                    
                    window.location.href="home"
                    
                },
                error => {
                    this.messageText=this.f.username.value + this.accountService.getToken();
                    //this.alertService.error(error);
                    if (this.isVisible) { 
                        return;
                      } 
                      
                      this.isVisible = true;
                      setTimeout(()=> this.isVisible = false,3000)
                    this.loading = false;
                });
    }
}