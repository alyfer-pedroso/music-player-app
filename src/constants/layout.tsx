import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { colors } from './tokens';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerLargeStyle: {
		backgroundColor: '',
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerBackground: () => (
		<View
			style={{
				...StyleSheet.absoluteFillObject,
				backgroundColor: colors.background,
				paddingBottom: 10,
			}}
		/>
	),
	headerTintColor: colors.text,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
	headerTitleStyle: {
		fontSize: 35,
		fontWeight: '700',
	},
};
