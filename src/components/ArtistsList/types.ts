import { FlatListProps } from 'react-native';
import { Artist } from '@/helpers';

export interface ArtistsListProps extends Partial<FlatListProps<Artist>> {
	artists: Artist[];
}
