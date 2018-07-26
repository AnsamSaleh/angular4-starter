import { AllUserData } from '../model/AllUserData';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/operator/do';

const INIT_STATE: AllUserData = {
    participants: [],
    threads: [],
    messages: []
};
//this.ThreadsService.thread.data   
/**
* This class provides the Threads service with methods to read names and add names.
*/
@Injectable()
export class ThreadsService {

private thread = new Store(initialState)

    private threadsSubject = new BehaviorSubject(INIT_STATE);
    public threads$: Observable<AllUserData> = this.threadsSubject.asObservable();

    constructor(private http: Http) {}

    loadUserThreads() {
        this.http.get('http://localhost:8090/api/threads')
            .map(res => res.json())
            .subscribe(data => this.threadsSubject.next(data));
    }

}
