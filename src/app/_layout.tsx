import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useLogTrackPlayerState, useSetupTrackPlayer } from '@/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
			<Stack.Screen name="(modals)" options={{ headerShown: false }} />

			<Stack.Screen
				name="player"
				options={{
					presentation: 'transparentModal',
					animation: 'slide_from_bottom',
					headerShown: false,
				}}
			/>
		</Stack>
	);
};

export default App;
