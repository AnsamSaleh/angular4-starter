import { AllUserData } from './../shared/model/AllUserData';
import { ThreadSummaryVM } from './thread-summary.model';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { ThreadsService } from '../shared';

@Component({
    selector: 'app-thread-section',
    templateUrl: './thread-section.component.html',
})
export class ThreadSectionComponent implements OnInit {
    userName$: Observable<string>;
    unreadMessagesCounter$: Observable<number>;
    threadSummaries$: Observable<ThreadSummaryVM>;
    threads$: Observable<AllUserData>;

    constructor(private threadsService: ThreadsService) {
        this.threads$ = threadsService.threads$;
    }

    ngOnInit() {
        this.threadsService.loadUserThreads();
    }
}
