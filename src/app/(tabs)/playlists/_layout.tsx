import { View } from 'react-native';
import { Stack } from 'expo-router';

import { colors } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false, headerTitle: 'Playlists' }}
				/>

				<Stack.Screen
					name="[p_name]"
					options={{
						headerTitle: 'Playlists',
						headerBackVisible: true,
						headerStyle: { backgroundColor: colors.background },
						headerTintColor: colors.primary,
					}}
				/>
			</Stack>
		</View>
	);
};

export default PlaylistsScreenLayout;
