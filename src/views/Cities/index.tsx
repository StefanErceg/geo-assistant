import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { stylesheet } from '../../stylesheets';
import { cities } from '../../mock/cities';
import { City } from './City';

export default () => {
	return (
		<SafeAreaView style={stylesheet.container}>
			<ScrollView style={stylesheet.cityList}>
				{cities?.map((city) => (
					<City key={city?.id} {...city} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};
