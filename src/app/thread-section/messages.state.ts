import { Message } from '../shared/model/message';

const MESSAGES: Message[] = [
    {
        id: undefined,
        threadId: undefined,
        participantId: undefined,
        text: undefined,
        timestamp: undefined,
    }
];

export class MessagesState {
    Messages: Message[] = MESSAGES;
}