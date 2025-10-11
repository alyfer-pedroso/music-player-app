import { ScrollView, View } from 'react-native';
import { TracksList } from '@/components';
import { defaultStyles } from '@/styles';

const SongsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView>
				<TracksList />
			</ScrollView>
		</View>
	);
};

export default SongsScreen;
