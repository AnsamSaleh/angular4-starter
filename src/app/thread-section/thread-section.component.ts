import { ThreadSectionState } from './thread-section.state';
// import { AllUserData } from '../shared/model/AllUserData';
import { ThreadSummaryVM } from './thread-summary.model';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
// import { ThreadsService } from '../shared';
import { ThreadSectionStore } from './thread-section.store';

@Component({
    selector: 'app-thread-section',
    templateUrl: './thread-section.component.html',
    providers: [ThreadSectionStore]
})
export class ThreadSectionComponent implements OnInit {
    userName$: Observable<string>;
    unreadMessagesCounter$: Observable<number>;
    threadSummaries$: Observable<ThreadSummaryVM>;
    threads$: Observable<ThreadSectionState> = this.store.state$;

    constructor(private store: ThreadSectionStore) {
    }

    ngOnInit() {
        this.store.loadThreads();
        this.store.state$.subscribe(console.log);

        this.store.loadParticipants();
        this.store.state$.subscribe(console.log);

        this.store.loadMessages();
        this.store.state$.subscribe(console.log);
    }
}
