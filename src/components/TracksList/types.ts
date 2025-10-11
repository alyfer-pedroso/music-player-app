import { FlatListProps } from 'react-native';
import library from '@/assets/data/library.json';

export type TracksListItemProps = Partial<FlatListProps<unknown>>;

export type TrackListLibraryItemProps = (typeof library)[0];
