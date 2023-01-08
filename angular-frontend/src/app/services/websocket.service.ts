import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  readonly uri: string = "http://localhost:3000";

  constructor() {
    this.socket = io(this.uri);
  }

  listen(evenName: string){
    return new Observable((subscriber) =>{
      this.socket.on(evenName, (data: unknown)=>{
        subscriber.next(data);
      })
    });
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }

}
