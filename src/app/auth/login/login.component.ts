import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {ConfigViewService} from 'src/app/services/config-view.service';
import {UserService} from 'src/app/services/user.service';
import {CampusService} from 'src/app/services/campus.service';
import {NgToastService} from 'ng-angular-popup';
import {Campus} from 'src/app/models/campus.model';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;
  c?: boolean = true;
  listCampus: Campus[];
  loginForm: UntypedFormGroup;
  loginFake: UntypedFormGroup;
  statusLogin: boolean = false;
  alert = {
    type: 'danger',
    message: "",
  }

  constructor(
    private socialAuthService: SocialAuthService,
    private userService: UserService,
    private campusService: CampusService,
    private router: Router,
    private configView: ConfigViewService,
    private toast: NgToastService,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.getListCampus();
    
    this.loginForm = this.formBuilder.group({
      campus_code: ['', Validators.required],
      accountEmail : ['', Validators.required],
    });

    this.loginFake = this.formBuilder.group({
      campus_code: ['', Validators.required],
        accountEmail : ['', Validators.required],
    });
 
  }

  ngOnInit(): void {
    this.toast.error({summary: 'Không thể đăng nhập !', duration: 5000});
  }

  getListCampus() {
    this.campusService.getListCampus().subscribe(data => {
      this.listCampus = data.payload;
      
    });
  }

//   loginWithGoogle(): void {
//     if (!this.loginForm.value.campus_code) {
//       this.toast.error({summary: 'Không thể đăng nhập', duration: 5000});
//       this.statusLogin = false;
//       return;
//     }
//     // email_user : this.loginForm.value.accountEmail
// //  email_user : this.loginForm.value.accountEmail

//     let dataSignIn = {
//       campus_code: this.loginForm.value.campus_code,
//     }

//     this.statusLogin = true;
//     // this.userService.fakeLogin(dataSignIn)
//     //   .subscribe(status => {
//     //     // console.log(status);
        
//     //     this.statusLogin = false;
//     //     if (status == true) {
//     //       setTimeout(() => {
//     //         this.toast.success({summary: 'Đăng nhập thành công', duration: 5000});
//     //         this.router.navigate(['/']);
//     //       }, 1000)
//     //     } else {
//     //       this.toast.error({summary: 'Không thể đăng nhập', duration: 5000});
//     //     }
//     //   })
//     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
//       .then(data => {
//         let dataSignIn = {
//           token: data.authToken,
//           campus_code: this.loginForm.value.campus_code,
//         }
       
//         this.statusLogin = true;
//         this.toast.warning({summary: 'Đang tiến hành đăng nhập', duration: 10000});
//         this.userService.login(dataSignIn)
//           .subscribe(status => {
//             // console.log(status);
            
//             this.statusLogin = false;
//             if (status == true) {
              
//               setTimeout(() => {
//                 this.toast.success({summary: 'Đăng nhập thành công', duration: 5000});
//                 this.router.navigate(['/']);
//               }, 1000)
//             } else {
//               this.toast.error({summary: 'Không thể đăng nhập', duration: 5000});
//             }
//           })
//       });
//   }

  loginWithGoogle(): void {
    // if (!this.loginForm.value.campus_code) {
    //   this.toast.error({ summary: 'Không thể đăng nhập', duration: 5000 });
    //   this.statusLogin = false;
    //   return;
    // }
  
    // this.loginForm.value.campus_code
    let dataSignIn = {
      campus_code: '1',
    };
  
    this.statusLogin = true;
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        let dataSignIn = {
          token: data.authToken,
          campus_code: '1',
        };
        
  
        this.toast.warning({ summary: 'Đang tiến hành đăng nhập', duration: 10000 });
        this.userService.login(dataSignIn).subscribe((status) => {
          this.statusLogin = false;
          if (status) {
            setTimeout(() => {
              this.toast.success({ summary: 'Đăng nhập thành công', duration: 5000 });
              this.router.navigate(['/']);
            }, 1000);
          } else {
            this.toast.error({ summary: 'Không thể đăng nhập', duration: 5000 });
          }
        });
      });
  }
  

//   loginWithFake(): void {
//     if (!this.loginFake.value.campus_code) {
//       this.toast.error({summary: 'Không thể đăng nhập', duration: 5000});
//       this.statusLogin = false;
//       return;
//     }

//     let dataFake = {
//       campus_code: this.loginFake.value.campus_code,
//  email_user : this.loginFake.value.accountEmail
//     }

//     this.statusLogin = true;
//     this.userService.fakeLogin(dataFake)
//       .subscribe(status => {
//         // console.log(status);
        
//         this.statusLogin = false;
//         if (status == true) {
//           setTimeout(() => {
//             this.toast.success({summary: 'Đăng nhập thành công', duration: 5000});
//             this.router.navigate(['/']);
//           }, 1000)
//         } else {
//           this.toast.error({summary: 'Không thể đăng nhập', duration: 5000});
//         }
//       })
//   }
loginWithFake(): void {
  if (!this.loginForm.value.campus_code) {
    this.toast.error({ summary: 'Không thể đăng nhập', duration: 5000 });
    this.statusLogin = false;
    return;
  }

  let dataFake = {
    campus_code: this.loginForm.value.campus_code,
    email_user: this.loginForm.value.accountEmail,
  };

  this.statusLogin = true;
  this.userService.fakeLogin(dataFake).subscribe((status) => {
    this.statusLogin = false;
    if (status) {
      setTimeout(() => {
        this.toast.success({ summary: 'Đăng nhập thành công', duration: 5000 });
        this.router.navigate(['/']);
      }, 1000);
    } else {
      this.toast.error({ summary: 'Không thể đăng nhập', duration: 5000 });
    }
  });
}

  logOut(): void {
    this.socialAuthService.signOut();

  }


}
