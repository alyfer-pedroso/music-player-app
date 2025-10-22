import { ScrollView, View } from 'react-native';

import { usePlaylists, useSearchPlaylists } from '@/hooks';
import { screenPadding } from '@/constants/tokens';
import { PlaylistsList, SearchInput } from '@/components';
import { defaultStyles } from '@/styles';

const PlaylistsScreen = () => {
	const { playlists: data } = usePlaylists();
	const { states, actions, playlists } = useSearchPlaylists(data);

	return (
		<View style={defaultStyles.container}>
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
				<PlaylistsList playlists={playlists} />
			</ScrollView>
		</View>
	);
};

export default PlaylistsScreen;
