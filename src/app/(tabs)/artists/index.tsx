import { ScrollView, View } from 'react-native';

import { useArtists, useSearchArtists } from '@/hooks';
import { screenPadding } from '@/constants/tokens';
import { ArtistsList, PageWrapper, SearchInput } from '@/components';

const ArtistsScreen = () => {
	const artistsData = useArtists();
	const { states, actions, artists } = useSearchArtists(artistsData);

	return (
		<PageWrapper title="Artists">
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
		</PageWrapper>
	);
};

export default ArtistsScreen;
