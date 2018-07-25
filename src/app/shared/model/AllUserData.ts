import { Message } from './message';
import { Thread } from './thread';
import { Participant } from "./participant";

export interface AllUserData {
    participants: Participant[];
    threads: Thread[];
    messages: Message[];
}
