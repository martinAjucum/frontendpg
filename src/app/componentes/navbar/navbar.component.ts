import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    //console.log("Resultado loco: "+this.authService.authenticated)
    
    // this.authService.isLoggedIn.pipe( auth=>{
    //   if(auth){
    //     this.isLogin = true;
    //     this.nombreUsuario = auth.displayName;
    //     this.emailUsuario = auth.email;
    //   } else {
    //     this.isLogin = false;
    //   }
    // })
    // console.log("Resultado loco: "+this.isLogin)
    this.authService.isLoggedIn().pipe(
      tap(auth => {
        if (auth) {
          // do something
          this.isLogin = true;
          this.nombreUsuario = auth.displayName;
          this.emailUsuario = auth.email;
        } else {
          // do something else
          this.isLogin = false;
        }
      })
    )
    .subscribe()
  }

  onClickLogout(){
    this.authService.logout();
  }
}
