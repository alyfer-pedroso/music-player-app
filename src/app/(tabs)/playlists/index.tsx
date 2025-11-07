import { ScrollView, View } from 'react-native';

import { usePlaylists, useSearchPlaylists } from '@/hooks';
import { screenPadding } from '@/constants/tokens';
import { PageWrapper, PlaylistsList, SearchInput } from '@/components';

const PlaylistsScreen = () => {
	const { playlists: data } = usePlaylists();
	const { states, actions, playlists } = useSearchPlaylists(data);

	return (
		<PageWrapper title="Playlists">
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
		</PageWrapper>
	);
};

export default PlaylistsScreen;
