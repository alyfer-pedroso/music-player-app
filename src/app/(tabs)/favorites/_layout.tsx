import { View } from 'react-native';
import { Stack } from 'expo-router';

import { StackScreenWithSearchBar } from '@/constants/layout';
import { defaultStyles } from '@/styles';

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
				/>
			</Stack>
		</View>
	);
};

export default FavoritesScreenLayout;
