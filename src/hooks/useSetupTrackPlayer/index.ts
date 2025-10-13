import { useEffect, useRef } from 'react';
import { setupPlayer } from './functions';
import { IUseSetupTrackPlayer } from './types';

export function useSetupTrackPlayer({ onLoad }: IUseSetupTrackPlayer) {
	const isInitialized = useRef(false);

	useEffect(() => {
		setupPlayer()
			.then(() => {
				isInitialized.current = true;
				onLoad?.();
			})
			.catch((err) => {
				isInitialized.current = false;
				console.log(err);
			});
	}, [onLoad]);
}
