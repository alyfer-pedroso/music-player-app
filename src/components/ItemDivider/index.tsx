import { utilsStyles } from '@/styles';
import { View } from 'react-native';

export const ItemDivider = () => (
	<View
		style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
	/>
);
