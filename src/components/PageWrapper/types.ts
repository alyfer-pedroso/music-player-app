import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface PageWrapperProps {
	children?: ReactNode;
	style?: ViewStyle;
	title?: string;
}
