import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  textToConvert = new FormControl('');
  methodToConvert = new FormControl(0);

  textConverted = '';

  convertText = () => {
    if(!this.validateForm()) return;
    const text = this.textToConvert.value ?? '';
    const option = this.methodToConvert.value ?? 0;
    let result = '';
    if (option === 1) {
      result = this.methodFirst(text);
    } else {
      result = this.methodFirst(text);
    }
    this.textConverted = result;
  }

  methodFirst = ( text: string ) => {
    const splitText = text.split(' ');
    return splitText.map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
  }

  methodSecond = ( text: string ) => {
    const splitText = text.split(' ');
    return splitText.reduce((acc, curr) => {
        const wordReversed = curr.split('').reverse().join('');
        return `${acc.length > 0 ? acc + ' ': acc}${wordReversed}`;
    }, "");
  }

  validateForm = () => {
    if (this.textToConvert.value === '') {
      alert("Invalid text");
      return false;
    }
    if (this.methodToConvert.value === 0) {
      alert("Invalid method");
      return false
    }
    return true;
  }
}
