import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useSetupTrackPlayer } from '@/hooks';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const App = () => {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync();
	}, []);

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	});

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
