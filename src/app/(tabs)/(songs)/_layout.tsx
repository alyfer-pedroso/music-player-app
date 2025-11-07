import { View } from 'react-native';
import { Stack } from 'expo-router';

import { defaultStyles } from '@/styles';

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false, headerTitle: 'Songs' }}
				/>
			</Stack>
		</View>
	);
};

export default SongsScreenLayout;
