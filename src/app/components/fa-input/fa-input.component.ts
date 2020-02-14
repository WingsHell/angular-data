import { Component, OnInit, Input, Output, EventEmitter, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../../shared/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {

  @Input() icon: string;
  @Output() value = new EventEmitter<string>();
  inputFocus = false;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  constructor() {}

  ngOnInit() {}

  get classes() {
    const cssClasses = {};
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

  @HostBinding('class.focus')
  get focus() {
    // console.log(this.inputFocus);
    // return this.inputFocus;
    return this.input ? this.input.focus : false;
  }
}
