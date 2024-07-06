import { Injectable } from '@angular/core';

declare var $: any;
declare var SockJS: any;
declare var Stomp: any;
@Injectable({
  providedIn: 'root'
})
export class WebsocketserviceService {

  stompClient: any;

  constructor() { }

  initializeWebSocketConnection(item: any) {
    // var token = this.token;
    // const serverUrl = this._app_config_service.getNotificationRemoteServiceBaseUrl() + 'socket?access_token=' + token.access_token;
    const serverUrl = "http://localhost:8110/hello"

    // console.log(serverUrl);
    let ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, () => {
        that.stompClient.subscribe("/chat", (message: { body: any; }) => {
            if (message.body) {
                console.log(message.body);
                // this.GetNotifications(item);

            }
        });
        // this.commonServiceProvider.setCustomStompClient(this.stompClient);
    });

}
}
