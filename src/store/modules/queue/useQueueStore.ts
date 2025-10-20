import { create } from 'zustand';
import { IUseQueueStore, IUseQueueStoreStates } from '@/store';

const initialStates: IUseQueueStoreStates = {
	activeQueueId: null,
};

export const useQueueStore = create<IUseQueueStore>((set) => ({
	...initialStates,
	setActiveQueueId: (activeQueueId: string | null) =>
		set(() => ({ activeQueueId })),
}));
