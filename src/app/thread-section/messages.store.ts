import { Http } from '@angular/http';
import { AllUserData } from './../shared/model/AllUserData';
import { MessagesState } from './messages.state';
import { Store } from './../store/Store';
import { Injectable } from '@angular/core';


@Injectable()
export class MessagesStore extends Store<MessagesState> {

    constructor(private http: Http) {
        super(new MessagesState())
    }

    loadMessages(): void {
        this.http.get('http://localhost:8090/api/threads')
            .map(res => res.json())
            .subscribe((data: AllUserData) => {
                this.setState({
                    ...this.state,
                    Messages: data.messages
                });
            });
    }
}
