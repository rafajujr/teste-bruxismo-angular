import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {

  @Input() textButton: string | undefined;
  @Input() size: string | undefined;

}
