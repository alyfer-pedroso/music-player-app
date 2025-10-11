import { FC } from 'react';
import { FlatList } from 'react-native';

import library from '@/assets/data/library.json';

import { TrackListItem } from '../TrackListItem';

export const TracksList: FC = () => {
	return (
		<FlatList
			data={library}
			renderItem={({ item }) => (
				<TrackListItem track={{ ...item, image: item?.artwork }} />
			)}
			scrollEnabled={false}
		/>
	);
};
