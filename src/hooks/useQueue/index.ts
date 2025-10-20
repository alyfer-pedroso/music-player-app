import { useQueueStore } from '@/store';

export const useQueue = () => useQueueStore((state) => state);
