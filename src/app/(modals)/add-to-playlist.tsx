import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAddToPlaylsit, useSearchPlaylists } from '@/hooks';
import { PlaylistsList, SearchInput } from '@/components';
import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

const AddToPlaylist: FC = () => {
	const { availablePlaylists, handlePlaylistPress } = useAddToPlaylsit();
	const { states, actions, playlists } = useSearchPlaylists(availablePlaylists);

	return (
		<SafeAreaView style={defaultStyles.container}>
			<View
				style={{
					paddingHorizontal: screenPadding.horizontal,
					paddingVertical: 12,
				}}
			>
				<SearchInput
					value={states.search}
					onChangeText={actions.setSearch}
					placeholder="Find in playlists"
				/>
			</View>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<PlaylistsList
					playlists={playlists}
					onPlaylistPress={handlePlaylistPress}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AddToPlaylist;
