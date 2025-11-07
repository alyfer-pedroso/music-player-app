import { FC } from 'react';
import { MenuView } from '@react-native-menu/menu';

import { useTrackShortcutMenu } from '@/hooks';
import { TrackShortcutsMenuProps } from './types';

export const TrackShortcutsMenu: FC<TrackShortcutsMenuProps> = ({
	track,
	children,
	style,
}) => {
	const { isFavorite, inPlaylist, handlePressAction } =
		useTrackShortcutMenu(track);

	return (
		<MenuView
			style={style}
			onPressAction={({ nativeEvent: { event } }) => handlePressAction(event)}
			actions={[
				{
					id: isFavorite ? 'remove-from-favorite' : 'add-to-favorite',
					title: isFavorite ? 'Remove from favorite' : 'Add to favorite',
				},
				{
					id: inPlaylist ? 'remove-from-playlist' : 'add-to-playlist',
					title: inPlaylist ? 'Remove from playlist' : 'Add to playlist',
				},
			]}
		>
			{children}
		</MenuView>
	);
};
