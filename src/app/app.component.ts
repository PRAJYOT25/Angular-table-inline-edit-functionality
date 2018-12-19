import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isHidden:Boolean;
  i = 1;
  editCache = {};
  dataSet = [];
  title = 'angular-proj';
  startEdit(): void {
    this.isHidden=true;
    let key;
    for (let i = 0; i < 5; i++) {
      key=i.toString(),
    this.editCache[ key ].edit = true;
    }
  }

  cancelEdit(): void {
    this.isHidden=false;
    let key;
    for (let i = 0; i < 5; i++) {
      key=i.toString(),
    this.editCache[ key ].edit = false;}
  }

  saveEdit(): void {
    let key;
    this.isHidden=false
    for (let i = 0; i < 5; i++) {
      key=i.toString();
    const index = this.dataSet.findIndex(item => item.key === key);
    Object.assign(this.dataSet[ index ], this.editCache[ key ].data);
    // this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
    }
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: { ...item }
        };
      }
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.dataSet.push({
        key    : i.toString(),
        name   : `Edrward ${i}`,
        age    : 32,
        address: `London Park no. ${i}`
      });
    }
    this.updateEditCache();
  }
}
