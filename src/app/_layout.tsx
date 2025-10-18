import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useLogTrackPlayerState, useSetupTrackPlayer } from '@/hooks';

SplashScreen.preventAutoHideAsync();

const App = () => {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync();
	}, []);

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	});

	useLogTrackPlayerState();

	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" hidden />
		</SafeAreaProvider>
	);
};

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
};

export default App;
