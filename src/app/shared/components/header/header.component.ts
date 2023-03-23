import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  theme = 'dark'
  ngOnInit(): void {
    this.switchTheme(localStorage.getItem('theme'))
  }
  switchTheme(state: string|null){
    if(state === 'dark'){
      document.querySelectorAll('.theme')[0].classList.add('dark-root');
      document.querySelectorAll('.theme')[0].classList.remove('light-root');
      this.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    }else if (state === 'light'){
      document.querySelectorAll('.theme')[0].classList.add('light-root');
      document.querySelectorAll('.theme')[0].classList.remove('dark-root');
      this.theme = 'light'
      localStorage.setItem('theme', 'light')
    }
  }
  logout(){
    localStorage.removeItem('access_token')
    this.router.navigateByUrl('/login')
  }

}
