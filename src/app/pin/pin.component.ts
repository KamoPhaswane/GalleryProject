import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pin',//specifying selector where the app should start
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],//specifying front end
})
export class PinComponent implements OnInit {

  @Input() pagetitle: string = "Enter pin";//passing any input inserted by the user to the component
  pin: string = "";

  //sending back any output from the component to the caller
  //EventEmitter is used by components to generate the event
  //The parent/caller of the component then subscribe to the event to get the output
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  emitEvent(){
    this.change.emit(this.pin);
  }

  handleInput(pin:string){
    if(pin==="clear"){
      this.pin = "";
      return;
    }
    if(this.pin.length === 4){
      return;
    }
    this.pin += pin;
  }

  ngOnInit() {}

}
