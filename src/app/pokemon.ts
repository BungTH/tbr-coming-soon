import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, NgModule, Output } from "@angular/core";

@Component({
    selector: "first-quest",
    template: 'Quest : Capture picture of your partner!',
    standalone: true
})

export class FirstQuestComponent {}

@Component({
    selector: "i-choose-you",
    template: `
      <img 
        *ngFor="let name of pokemon_names"
        src="/assets/pokemons/{{name}}.png"
        (click)="onSelected(name)"
        >
    `
})

export class IChooseYouComponent {
    @Input()
    pokemon_names = ["bulbasaur", "charmander", "squirtle"];

    @Output()
    chooseEvent = new EventEmitter();

    onSelected(pokemon_name: string): void {
        if(pokemon_name === "squirtle") {
            this.chooseEvent.emit('Squirt Squirt!');
            return
        }
        else if (pokemon_name === "charmander") {
            this.chooseEvent.emit('Char Char!');
            return
        }
        else if (pokemon_name === "bulbasaur") {
            this.chooseEvent.emit('Bulba Bulba!');
            return
        }
        else {
            this.chooseEvent.emit('Pika Pika!');
            return
        }
    }
}

@NgModule({
    imports : [CommonModule, FirstQuestComponent],
    declarations: [IChooseYouComponent],
    exports: [FirstQuestComponent, IChooseYouComponent]
})

export class PokemonModule {}

export const cmps = [FirstQuestComponent, IChooseYouComponent];