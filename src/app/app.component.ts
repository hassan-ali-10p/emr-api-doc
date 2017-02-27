import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blackwell Gateway Testing Tool';
  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  }
}
