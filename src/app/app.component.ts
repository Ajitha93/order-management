import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-management';
  showCreateOrderForm = false;
  showGrid=true;

  toggleCreateOrderForm(): void {
    this.showCreateOrderForm = !this.showCreateOrderForm;
    this.showGrid=!this.showGrid;
  }
}
