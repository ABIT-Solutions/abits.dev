import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-mat';

  constructor(private renderer: Renderer2) {}

  first(){
    try {
  const errorField = this.renderer.selectRootElement('.contact_support');
    errorField.scrollIntoView();
} catch (err) {

}
}
}
