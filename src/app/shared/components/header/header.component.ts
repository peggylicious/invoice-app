import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  theme = 'dark'
  ngOnInit(): void {
  }
  switchTheme(state: string){
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

}
