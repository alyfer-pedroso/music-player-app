import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import {
	useAndroidPermissions,
	useDeepLinking,
	useLogTrackPlayerState,
	useSetupTrackPlayer,
} from '@/hooks';
import { colors } from '@/constants/tokens';

SplashScreen.preventAutoHideAsync();

const App = () => {
	useAndroidPermissions();
	useDeepLinking();

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync();
	}, []);

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	});

	useLogTrackPlayerState();

	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<RootNavigation />
				<StatusBar style="auto" hidden />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
};

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

			<Stack.Screen
				name="player"
				options={{
					presentation: 'transparentModal',
					animation: 'slide_from_bottom',
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="notification.click"
				options={{
					presentation: 'transparentModal',
					animation: 'fade',
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="(modals)/add-to-playlist"
				options={{
					presentation: 'modal',
					animation: 'fade_from_bottom',
					headerTitle: 'Add to playlists',
					headerBackVisible: true,
					headerStyle: { backgroundColor: colors.background },
					headerTintColor: colors.primary,
				}}
			/>
		</Stack>
	);
};

export default App;
