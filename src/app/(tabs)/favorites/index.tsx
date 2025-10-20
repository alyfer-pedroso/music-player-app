import { ScrollView, View } from 'react-native';

import { useFavorites, useSongs } from '@/hooks';
import { generateTracksListId } from '@/functions';
import { screenPadding } from '@/constants/tokens';
import { SearchInput, TracksList } from '@/components';
import { defaultStyles } from '@/styles';
import { QueueIds } from '@/helpers';

const FavoritesScreen = () => {
	const { favorites } = useFavorites();
	const { states, actions, library } = useSongs(favorites);

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
				<TracksList
					id={generateTracksListId(QueueIds.FAVORITES, states.search)}
					tracks={library}
				/>
			</ScrollView>
		</View>
	);
};

export default FavoritesScreen;
