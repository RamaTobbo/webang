import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 
    <div>
      <app-home></app-home>
      <app-header [guest]=user></app-header>
 
  
    
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webang';
  user="rama";
}
 