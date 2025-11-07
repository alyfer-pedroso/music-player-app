import { useEffect, useState } from 'react';
import { Alert, Linking, Platform } from 'react-native';

export function useAndroidPermissions() {
	const [permissionsGranted, setPermissionsGranted] = useState(
		Platform.OS !== 'android',
	);

	const requestOverlayPermission = async () => {
		try {
			Alert.alert(
				'Permissão Opcional',
				'Para exibir controles sobre outros apps (pop-ups), você pode ativar esta permissão nas configurações.',
				[
					{
						text: 'Agora não',
						style: 'cancel',
					},
					{
						text: 'Abrir Configurações',
						onPress: () => {
							Linking.openSettings();
						},
					},
				],
			);
		} catch (error) {
			console.error('Erro ao solicitar permissão de overlay:', error);
		}
	};

	const requestPermissions = async () => {
		try {
			if (Number(Platform.Version) >= 33) {
				const { PermissionsAndroid } = await import('react-native');

				const notificationPermission = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
					{
						title: 'Permissão de Notificação',
						message:
							'O app precisa de permissão para exibir controles de música na notificação.',
						buttonNeutral: 'Perguntar depois',
						buttonNegative: 'Cancelar',
						buttonPositive: 'OK',
					},
				);

				if (notificationPermission !== PermissionsAndroid.RESULTS.GRANTED) {
					console.warn('Permissão de notificação negada');
				}

				const postNotificationsPermission = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
					{
						title: 'Permissão de Notificação',
						message:
							'O app precisa de permissão para exibir controles de musica na notificação.',
						buttonNeutral: 'Perguntar depois',
						buttonNegative: 'Cancelar',
						buttonPositive: 'OK',
					},
				);

				if (
					postNotificationsPermission !== PermissionsAndroid.RESULTS.GRANTED
				) {
					console.warn('Permissão de notificação negada');
				}
			}

			setPermissionsGranted(true);
		} catch (error) {
			console.error('Erro ao solicitar permissões:', error);
			setPermissionsGranted(false);
		}
	};

	useEffect(() => {
		if (Platform.OS === 'android') {
			requestPermissions();
		}
	}, []);

	const openAppSettings = () => {
		Linking.openSettings();
	};

	return {
		permissionsGranted,
		requestPermissions,
		openAppSettings,
		requestOverlayPermission,
	};
}
