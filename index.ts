import TrackPlayer from 'react-native-track-player';
import { registerRootComponent } from 'expo';

import { playbackService } from '@/services';
import App from './src/app/_layout';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

TrackPlayer.registerPlaybackService(() => playbackService);
