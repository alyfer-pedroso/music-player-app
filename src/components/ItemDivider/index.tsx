import { FC } from 'react';
import { View } from 'react-native';

import { utilsStyles } from '@/styles';

import { ItemDividerProps } from './types';

export const ItemDivider: FC<ItemDividerProps> = ({ style }) => (
	<View
		style={[
			{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 },
			style,
		]}
	/>
);
