import { useLayoutEffect, useState } from 'react';
import { useNavigation } from 'expo-router';

import { defaultSearchOptions } from './constants';
import { SearchBarProps } from 'react-native-screens';

export function useNavigationSearch({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps;
}) {
	const navigation = useNavigation();

	const [search, setSearch] = useState('');

	const onChangeText: SearchBarProps['onChangeText'] = ({
		nativeEvent: { text },
	}) => {
		setSearch(text);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText,
			},
		});
	}, [navigation, searchBarOptions]);

	return search;
}
