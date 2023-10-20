import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div>
  
 
   <h1 style="color: brown;"> {{more.age}} {{guest}} Login please:</h1>
   <input><br/>
  <input><br/>
  <input type="button" value="login">
 
</div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  guest:string=""
more:Housinglocation={
  size:"xl",
  age:3

}
}
