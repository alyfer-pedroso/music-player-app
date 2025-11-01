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
					image: isFavorite ? 'ic_menu_favorite' : 'ic_menu_favorite_border',
				},
				{
					id: inPlaylist ? 'remove-from-playlist' : 'add-to-playlist',
					title: inPlaylist ? 'Remove from playlist' : 'Add to playlist',
					image: inPlaylist ? 'ic_menu_remove' : 'ic_menu_add',
				},
			]}
		>
			{children}
		</MenuView>
	);
};
