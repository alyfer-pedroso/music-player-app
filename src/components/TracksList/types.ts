import library from '@/assets/data/library.json';

export interface TracksListItemProps {
	tracks: typeof library;
}

export type TrackListLibraryItemProps = (typeof library)[0];
