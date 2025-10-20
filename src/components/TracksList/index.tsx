import { FC } from 'react';
import { FlatList } from 'react-native';

import { useTracksList } from '@/hooks';

import { ItemDivider } from '../ItemDivider';

import { ListEmptyComponent, TrackListItem } from './components';
import { TracksListItemProps } from './types';
import { QueueControls } from '../QueueControls';

export const TracksList: FC<TracksListItemProps> = ({
	id,
	tracks,
	hideQueueControls = false,
	...props
}) => {
	const { actions } = useTracksList({ id, tracks });

	return (
		<FlatList
			data={tracks}
			ItemSeparatorComponent={ItemDivider}
			contentContainerStyle={{ paddingBottom: 168 }}
			ListFooterComponent={<ItemDivider />}
			ListEmptyComponent={<ListEmptyComponent />}
			ListHeaderComponent={
				!hideQueueControls ? (
					<QueueControls tracks={tracks} style={{ paddingBottom: 25 }} />
				) : undefined
			}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={track}
					onTrackSelect={actions.handleTrackSelect}
				/>
			)}
			scrollEnabled={false}
			{...props}
		/>
	);
};
