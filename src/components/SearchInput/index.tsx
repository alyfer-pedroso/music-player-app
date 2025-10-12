import { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors, fontSize } from '@/constants/tokens';
import { SearchInputProps } from './types';

export const SearchInput: FC<SearchInputProps> = ({
	value,
	onChangeText,
	placeholder = 'Search...',
}) => {
	return (
		<View style={styles.container}>
			<Ionicons
				name="search"
				size={20}
				color={colors.textMuted}
				style={styles.icon}
			/>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor={colors.textMuted}
				style={styles.input}
				returnKeyType="search"
				clearButtonMode="while-editing"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 10,
		paddingHorizontal: 12,
		marginHorizontal: 16,
		marginBottom: 12,
		height: 45,
	},
	icon: {
		marginRight: 8,
	},
	input: {
		flex: 1,
		fontSize: fontSize.sm,
		color: colors.text,
		paddingVertical: 8,
	},
});
