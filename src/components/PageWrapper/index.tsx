import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import { PageWrapperProps } from './types';

export const PageWrapper: FC<PageWrapperProps> = ({
	children,
	style,
	title = '',
}) => {
	return (
		<View style={[defaultStyles.container, style]}>
			{!!title && (
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
			)}
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		paddingTop: 35,
		paddingBottom: 6,
		paddingHorizontal: 18,
	},
	title: {
		fontSize: 35,
		fontWeight: '600',
		color: colors.text,
	},
});
