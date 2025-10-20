import { FC } from 'react';
import { FlatList } from 'react-native';

import { useTracksList } from '@/hooks';

import { ItemDivider } from '../ItemDivider';

import { ListEmptyComponent, TrackListItem } from './components';
import { TracksListItemProps } from './types';

export const TracksList: FC<TracksListItemProps> = ({
	id,
	tracks,
	...props
}) => {
	const { actions } = useTracksList({ id, tracks });

	return (
		<FlatList
			data={tracks}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			contentContainerStyle={{ paddingBottom: 168 }}
			ListEmptyComponent={<ListEmptyComponent />}
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
