import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import { useSongs } from '@/hooks';
import { SearchInput, TracksList } from '@/components';
import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import tracks from '@/assets/data/library.json';

const FavoritesScreen = () => {
	const favoriteTracks = useMemo(
		() => tracks.filter((track) => !!track?.rating),
		[],
	);

	const { states, actions, library } = useSongs(favoriteTracks);

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
					placeholder="Find in songs"
				/>
			</View>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList tracks={library} />
			</ScrollView>
		</View>
	);
};

export default FavoritesScreen;
