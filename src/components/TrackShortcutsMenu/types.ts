import { PropsWithChildren } from 'react';
import { ViewStyle } from 'react-native';
import { Track } from 'react-native-track-player';

export interface TrackShortcutsMenuProps
	extends PropsWithChildren<{ track: Track }> {
	style?: ViewStyle;
}
