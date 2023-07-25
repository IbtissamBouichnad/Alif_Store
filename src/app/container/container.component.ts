import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  packs=[
    {status:false,image:'assets/Picture2.png',titre:'3 PROHETES ET 1 LIVRET',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
    {status:false,image:'assets/Picture2.png',titre:'3 RECITS AUDIO',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
    {status:false,image:'assets/Picture2.png',titre:'LIVRET 3',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
    {status:false,image:'assets/Picture2.png',titre:'LIVRET 4',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
  ];
  livrets=[
    {status:false,image:'assets/Picture2.png',titre:'3 PROHETES ET 1 LIVRET',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
    {status:false,image:'assets/Picture2.png',titre:'3 RECITS AUDIO',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
    {status:false,image:'assets/Picture2.png',titre:'LIVRET 3',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
    {status:false,image:'assets/Picture2.png',titre:'LIVRET 4',age:'A paritr de 3 ans',description:'Offrir aux enfants la possibilité dexplorer des récits prophétiques authentiques de l Islam',prix:'99,00€'},
  ];
  onHeartClick(section: string, index: number): void {
    if (section === 'packs') {
      this.packs[index].status = !this.packs[index].status;
    } else if (section === 'livrets') {
      this.livrets[index].status = !this.livrets[index].status;
    }
  }

}
