import { QueueIds } from '@/helpers';

export function generateTracksListId(
	trackListName: QueueIds | string,
	search?: string,
) {
	return `${trackListName}${search ? `-${search}` : ''}`;
}
