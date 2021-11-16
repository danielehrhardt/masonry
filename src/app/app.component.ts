import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'masonry';

  values: any = { left: [], right: [] };
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit() {
    this.items.map((item, index) => {
      const data = { height: Math.floor(Math.random() * 10) * 50, id: item };
      if (index % 2 == 0) {
        this.values.left.push(data);
      } else {
        this.values.right.push(data);
      }
      return data;
    });

    console.log(this.values);
  }
}
