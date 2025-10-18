import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

export type IconProps = Omit<
	ComponentProps<typeof MaterialCommunityIcons>,
	'name'
>;
export type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];
