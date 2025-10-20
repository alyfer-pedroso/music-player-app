import { FC } from 'react';
import { FlatList } from 'react-native';

import {
	ArtistListItem,
	ItemSeparator,
	ListEmptyComponent,
} from './components';
import { ArtistsListProps } from './types';

export const ArtistsList: FC<ArtistsListProps> = ({ artists }) => {
	return (
		<FlatList
			ListFooterComponent={ItemSeparator}
			ListEmptyComponent={ListEmptyComponent}
			ItemSeparatorComponent={ItemSeparator}
			contentContainerStyle={{ paddingBottom: 168 }}
			scrollEnabled={false}
			data={artists}
			renderItem={({ item: artist }) => <ArtistListItem artist={artist} />}
		/>
	);
};
