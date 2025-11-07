import { ScrollView, View } from 'react-native';

import { useFavorites, useSongs } from '@/hooks';
import { generateTracksListId } from '@/functions';
import { screenPadding } from '@/constants/tokens';
import { PageWrapper, SearchInput, TracksList } from '@/components';
import { QueueIds } from '@/helpers';

const FavoritesScreen = () => {
	const { favorites } = useFavorites();
	const { states, actions, library } = useSongs({ library: favorites });

	return (
		<PageWrapper title="Favorites">
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
				<TracksList
					id={generateTracksListId(QueueIds.FAVORITES, states.search)}
					tracks={library}
				/>
			</ScrollView>
		</PageWrapper>
	);
};

export default FavoritesScreen;
