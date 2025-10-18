import { FC } from 'react';
import { FlatList } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';

import { ItemDivider } from '../ItemDivider';

import { ListEmptyComponent, TrackListItem } from './components';
import { TracksListItemProps } from './types';

export const TracksList: FC<TracksListItemProps> = ({ tracks }) => {
	const handleTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track);
		await TrackPlayer.play();
	};

	return (
		<FlatList
			data={tracks}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			contentContainerStyle={{ paddingBottom: 168 }}
			ListEmptyComponent={<ListEmptyComponent />}
			renderItem={({ item: track }) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			scrollEnabled={false}
		/>
	);
};
