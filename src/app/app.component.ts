import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lab5';
  num1: number =0;
  num2: number = 0;
  resultado: number = 0;
  color_red: number =0;
  color_green: number =0;
  color_blue: number =0;
  

  suma(){
    this.resultado = this.num1 + this.num2;
  }
  resta(){
    this.resultado = this.num1 - this.num2;
  }
  multiplicacion(){
    this.resultado = this.num1 * this.num2;
  }
  divsion(){
    this.resultado = this.num1 / this.num2;
  }
  potencia(){
    this.resultado = this.num1 ** this.num2;
  }

}
