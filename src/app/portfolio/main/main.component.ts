import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts = [
    { title: 'GITHUB API', label: 'Javascript', imgUrl: '/assets/github-api.png', Href: 'https://github.com/iamzaidakbar/GITHUB-USER-FETCH-API-JAVASCRIPT' },
    { title: 'CALCULATOR MULTI THEMES', label: 'javascript', imgUrl: '/assets/calculator.png', Href: 'https://github.com/iamzaidakbar/CALCULATOR-MULTI-THEMES-JAVASCRIPT' },
    { title: 'WEATHER API', label: 'Javascript', imgUrl: '/assets/weather.png', Href: 'https://github.com/iamzaidakbar/WEATHER-API-JAVASCRIPT' },
    { title: 'SPLASH PHOTO API', label: 'Angular', imgUrl: '/assets/splash_api.png', Href: 'https://github.com/iamzaidakbar/SPLASH-PHOTO-FETCHING-API-ANGULAR' },
    { title: 'LAMBORGHJINI CAR ANIMATION', label: 'Javascript', imgUrl: '/assets/lamborghini.png', Href: 'https://github.com/iamzaidakbar/Lamborghini-car-animation' },
    { title: 'CREDIT CARD GENERATOR', label: 'Angular', imgUrl: '/assets/Card-generator.png', Href: 'https://github.com/iamzaidakbar/CREDIT-CARD-GENERATOR-ANGULAR' },
    { title: 'PASSWORD GENERATOR', label: 'Angular', imgUrl: '/assets/Password-generator.png', Href: 'https://github.com/iamzaidakbar/PASSWORD-GENERATOR-ANGULAR' },
    { title: 'TIC TAC TOE', label: 'Javascript', imgUrl: '/assets/tictactoe.png', Href: 'https://github.com/iamzaidakbar/TIC-TAC-TOE' },
    { title: 'WIKIPEDIA API', label: 'Angular', imgUrl: '/assets/wikipedia.png', Href: 'https://github.com/iamzaidakbar/WIKIPEDIA-API-ANGULAR' },
    { title: 'TYPING GAME', label: 'Angular', imgUrl: '/assets/typing_test.png', Href: 'https://github.com/iamzaidakbar/TYPING-GAME-ANGULAR' },
    { title: 'FAST PACED MATH GAME', label: 'Angular', imgUrl: '/assets/mathgame.png', Href: 'https://github.com/iamzaidakbar/FAST-PACED-MATH-GAME-ANGULAR' },
  ]

  constructor() {}

  ngOnInit(): void {
  }

}