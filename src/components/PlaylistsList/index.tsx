import { FC } from 'react';
import { FlatList } from 'react-native';

import {
	ItemSeparator,
	ListEmptyComponent,
	PlaylistListItem,
} from './components';
import { PlaylistsListProps } from './types';

export const PlaylistsList: FC<PlaylistsListProps> = ({
	playlists,
	onPlaylistPress,
}) => {
	return (
		<FlatList
			ListFooterComponent={ItemSeparator}
			ListEmptyComponent={ListEmptyComponent}
			ItemSeparatorComponent={ItemSeparator}
			contentContainerStyle={{ paddingBottom: 168 }}
			scrollEnabled={false}
			data={playlists}
			renderItem={({ item: playlist }) => (
				<PlaylistListItem
					playlist={playlist}
					onPlaylistPress={onPlaylistPress}
				/>
			)}
		/>
	);
};
