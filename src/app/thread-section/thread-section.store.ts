import { AllUserData } from '../shared/model/AllUserData';
import { Http } from '@angular/http';
import { ThreadSectionState } from './thread-section.state';
import { Store } from '../store/Store';
import { Injectable } from "@angular/core";

@Injectable()
export class ThreadSectionStore extends Store<ThreadSectionState> {

    
    constructor(private http: Http) {
        super(new ThreadSectionState());
    }

    loadThreads(): void {
        this.http.get('http://localhost:8090/api/threads')
            .map(res => res.json())
            .subscribe((data: AllUserData) => {
                this.setState({
                    ...this.state,
                    threads: data.threads
                });
            });
    }

    loadMessages(): void {
        this.http.get('http://localhost:8090/api/threads')
            .map(res => res.json())
            .subscribe((data: AllUserData) => {
                this.setState({
                    ...this.state,
                    messages: data.messages
                });
            });
    }

    loadParticipants(): void {
        this.http.get('http://localhost:8090/api/threads')
            .map(res => res.json())
            .subscribe((data: AllUserData) => {
                this.setState({
                    ...this.state,
                    participants: data.participants
                });
            });
    }
}