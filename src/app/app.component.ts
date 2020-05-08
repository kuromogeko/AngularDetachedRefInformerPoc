import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';
  name = "Hans"
  val = "get the Flammenwerfer"

  personDoTuples: Array<string> = [
      "Hans",
      "Peter",
      "Panzer of the Lake",
      "Hans"
  ]

}
