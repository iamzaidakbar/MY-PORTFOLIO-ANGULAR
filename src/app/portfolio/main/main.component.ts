import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   posts = [
    {id:'1', title: 'PORTFOLIO', label: 'Angular', imgUrl: '/assets/portfolio.png', Href: 'https://github.com/iamzaidakbar/MY-PORTFOLIO-ANGULAR' },
    {id:'2', title: 'GITHUB API', label: 'Javascript', imgUrl: '/assets/github-api.png', Href: 'https://github.com/iamzaidakbar/GITHUB-USER-FETCH-API-JAVASCRIPT' },
    {id:'3', title: 'CALCULATOR MULTI THEMES', label: 'javascript', imgUrl: '/assets/calculator.png', Href: 'https://github.com/iamzaidakbar/CALCULATOR-MULTI-THEMES-JAVASCRIPT' },
    {id:'4', title: 'WEATHER API', label: 'Javascript', imgUrl: '/assets/weather.png', Href: 'https://github.com/iamzaidakbar/WEATHER-API-JAVASCRIPT' },
    {id:'5', title: 'SPLASH PHOTO API', label: 'Angular', imgUrl: '/assets/splash_api.png', Href: 'https://github.com/iamzaidakbar/SPLASH-PHOTO-FETCHING-API-ANGULAR' },
    {id:'6', title: 'LAMBORGHJINI CAR ANIMATION', label: 'Javascript', imgUrl: '/assets/lamborghini.png', Href: 'https://github.com/iamzaidakbar/Lamborghini-car-animation' },
    {id:'7', title: 'CREDIT CARD GENERATOR', label: 'Angular', imgUrl: '/assets/Card-generator.png', Href: 'https://github.com/iamzaidakbar/CREDIT-CARD-GENERATOR-ANGULAR' },
    {id:'8', title: 'PASSWORD GENERATOR', label: 'Angular', imgUrl: '/assets/Password-generator.png', Href: 'https://github.com/iamzaidakbar/PASSWORD-GENERATOR-ANGULAR' },
    {id:'9', title: 'TIC TAC TOE', label: 'Javascript', imgUrl: '/assets/tictactoe.png', Href: 'https://github.com/iamzaidakbar/TIC-TAC-TOE' },
    {id:'10', title: 'WIKIPEDIA API', label: 'Angular', imgUrl: '/assets/wikipedia.png', Href: 'https://github.com/iamzaidakbar/WIKIPEDIA-API-ANGULAR' },
    {id:'11', title: 'TYPING GAME', label: 'Angular', imgUrl: '/assets/typing_test.png', Href: 'https://github.com/iamzaidakbar/TYPING-GAME-ANGULAR' },
    {id:'12', title: 'FAST PACED MATH GAME', label: 'Angular', imgUrl: '/assets/mathgame.png', Href: 'https://github.com/iamzaidakbar/FAST-PACED-MATH-GAME-ANGULAR' },
    {id:'13', title: 'REAL EMAIL SERVICE', label: 'Angular With Backend Service', imgUrl: '/assets/EmailService.png', Href: 'https://github.com/iamzaidakbar/REAL-EMAIL-SERVICE-ANGULAR-WITHBACKEND-SERVICE' },
  ]

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
