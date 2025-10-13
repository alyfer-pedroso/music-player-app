import { FC } from 'react';
import { FlatList } from 'react-native';

import { TrackListItem } from '../TrackListItem';
import { ItemDivider } from '../ItemDivider';
import { TracksListItemProps } from './types';

export const TracksList: FC<TracksListItemProps> = ({ tracks }) => {
	return (
		<FlatList
			data={tracks}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			contentContainerStyle={{ paddingBottom: 168 }}
			renderItem={({ item: track }) => <TrackListItem track={track} />}
			scrollEnabled={false}
		/>
	);
};
