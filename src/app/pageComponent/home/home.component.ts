import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Change color every 100 milliseconds
    setInterval(() => this.changeColor(), 400);
  }

  changeColor() {
    const textElement = document.getElementById('colorText') as HTMLElement | null;

    if (textElement) {
      const text = textElement.textContent || '';

      // Get the current color values
      const currentColors = text.split('').map(() => this.getRandomColor());

      // Set the colors to the text
      textElement.innerHTML = currentColors.map((color, index) => {
        return `<span style="color:${color};">${text[index]}</span>`;
      }).join('');
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/105pJdmLaIfjVxOlBCTNddUhnk1rth9Xl/view?usp=drive_link');
    link.setAttribute('download', 'learnings.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


}
