import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonModule } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  pokemon_namesV2 = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];

  selectedPokemon = 'Waiting for you to choose a pokemon';

  onChoose(pokemon_name: string): void {
    console.log('You choose ' + pokemon_name + '!');
    this.selectedPokemon = 'You choose ' + pokemon_name + '!';
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonModule],
  template: '<first-quest/>',
})

export class TrialAppComponent {
  
}
