import { FC } from 'react';
import { Text, View } from 'react-native';

export const ListEmptyComponent: FC = () => {
	return (
		<View>
			<Text>No songs found</Text>
		</View>
	);
};
