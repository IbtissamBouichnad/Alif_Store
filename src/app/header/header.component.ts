import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  toggle1 = true;
  toggle2 = false;
  toggle3 = false;
  toggle4 = false;

  enableDisableRule1() {
    this.toggle1 = true;
    this.toggle2 = false;
    this.toggle3 = false;
    this.toggle4 = false;
  }
  enableDisableRule2() {
    this.toggle2 = true;
    this.toggle1 = false;
    this.toggle3 = false;
    this.toggle4 = false;
  }
  enableDisableRule3() {
    this.toggle3 = true;
    this.toggle1 = false;
    this.toggle2 = false;
    this.toggle4 = false;
  }
  enableDisableRul4() {
    this.toggle4 = true;
    this.toggle1 = false;
    this.toggle2 = false;
    this.toggle3 = false;
  }
  pack = [
    {
      status: false,
      image: 'assets/Picture2.png',
      titre: '3 PROHETES ET 1 LIVRET',
      age: 'A paritr de 3 ans',
      description:
        'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',
      prix: '99,00€',
    },
  ];

  clickEvent(i: number) {
    this.pack[i].status = !this.pack[i].status;
  }
}
