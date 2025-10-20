import { ScrollView, View } from 'react-native';

import { useArtists, useSearchArtists } from '@/hooks';
import { screenPadding } from '@/constants/tokens';
import { ArtistsList, SearchInput } from '@/components';
import { defaultStyles } from '@/styles';

const ArtistsScreen = () => {
	const artistsData = useArtists();
	const { states, actions, artists } = useSearchArtists(artistsData);

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
					placeholder="Find in artists"
				/>
			</View>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<ArtistsList artists={artists} />
			</ScrollView>
		</View>
	);
};

export default ArtistsScreen;
