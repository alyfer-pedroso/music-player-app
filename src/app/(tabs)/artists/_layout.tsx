import { View } from 'react-native';
import { Stack } from 'expo-router';

import { colors } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

const ArtistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false, headerTitle: 'Artists' }}
				/>

				<Stack.Screen
					name="[name]"
					options={{
						headerTitle: 'Artists',
						headerBackVisible: true,
						headerStyle: { backgroundColor: colors.background },
						headerTintColor: colors.primary,
					}}
				/>
			</Stack>
		</View>
	);
};

export default ArtistsScreenLayout;
