import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoice-app';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setTheme()
  }
  setTheme(){
    if(localStorage.getItem('theme') === 'dark'){
      console.log(localStorage.getItem('theme'))
      document.querySelectorAll('.theme')[0].classList.add('dark-root');
      // document.querySelectorAll('.theme')[0].classList.remove('dark-root');
      // localStorage.setItem('theme', 'dark')
    }else if(localStorage.getItem('theme') === 'light'){
      document.querySelectorAll('.theme')[0].classList.add('light-root');
      // document.querySelectorAll('.theme')[0].classList.remove('dark-root');
      // localStorage.setItem('theme', 'light')
    }else{
      document.querySelectorAll('.theme')[0].classList.add('dark');
    }
  }
}
