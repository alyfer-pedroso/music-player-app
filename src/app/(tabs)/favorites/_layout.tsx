import { View } from 'react-native';
import { Stack } from 'expo-router';

import { defaultStyles } from '@/styles';

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false, headerTitle: 'Favorites' }}
				/>
			</Stack>
		</View>
	);
};

export default FavoritesScreenLayout;
