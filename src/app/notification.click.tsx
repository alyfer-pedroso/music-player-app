import { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

import { splashScreenImageUrl } from '@/constants/images';
import { defaultStyles } from '@/styles';

const NotificationClickScreen: FC = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace('/(tabs)/(songs)');
	}, [router]);

	return (
		<View style={defaultStyles.container}>
			<Image
				source={{ uri: splashScreenImageUrl }}
				style={styles.image}
				contentFit="contain"
			/>
		</View>
	);
};

export default NotificationClickScreen;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%',
	},
});
