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
      document.querySelectorAll('.dark-root')[0].classList.add('light-root');
      document.querySelectorAll('.light-root')[0].classList.remove('dark-root');
    }else{
      document.querySelectorAll('.light-root')[0].classList.add('dark-root');
      document.querySelectorAll('.dark-root')[0].classList.remove('light-root');
    }
  }

}
