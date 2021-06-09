import { Component, OnInit } from '@angular/core';
import { JokesRepoService } from '../services/jokes-repo.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: any;

  constructor(private jokesService: JokesRepoService) { }

  ngOnInit(): void {
    this.jokesService.getRandomJoke().subscribe( (res) =>{
      console.log(res)
      this.joke= res.joke;
    });
  }

}
