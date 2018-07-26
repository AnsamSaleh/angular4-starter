import { Thread } from './../shared/model/thread';
import { Message } from './../shared/model/message';
import { Participant } from './../shared/model/participant';

export class ThreadSectionState {
    threads: Thread[] = [];
    messages: Message[] = [];
    participants: Participant[] = [];
}