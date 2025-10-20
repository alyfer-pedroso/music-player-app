import { QueueIds } from '@/helpers';

export interface IUseQueueStoreStates {
	activeQueueId: QueueIds | `${QueueIds}-${string}` | string | null;
}

export interface IUseQueueStoreActions {
	setActiveQueueId: (id: IUseQueueStoreStates['activeQueueId']) => void;
}

export type IUseQueueStore = IUseQueueStoreStates & IUseQueueStoreActions;
