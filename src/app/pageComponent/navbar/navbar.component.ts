import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent  {

  ngOnInit(): void {
    setInterval(() => this.changeColor(), 500);
  }

  changeColor(): void {
    const colorfulPath = document.getElementById('colorfulPath') as HTMLElement | null;
    const colors = ['rgb(22, 72, 99)', 'rgb(66, 125, 157)', 'rgb(155, 190, 200)', 'rgb(221, 242, 253)'];

    if (colorfulPath) {
      const currentIndex = colors.indexOf(colorfulPath.style.fill);
      const nextIndex = (currentIndex + 1) % colors.length;
      const nextColor = colors[nextIndex];
      colorfulPath.style.fill = nextColor;
    }
  }
}

