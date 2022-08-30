import { StyleSheet } from 'react-native';

export const stylesheet = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},

	newsItem: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'justify',
		marginVertical: 20,
		paddingVertical: 10,
		marginLeft: 2,
		marginRight: 2,
		paddingHorizontal: 2,
		shadowColor: '#fff',
		shadowOpacity: 0.4,
	},

	newsTitle: {
		padding: 10,
		fontSize: 16,
	},

	newsImage: {
		resizeMode: 'cover',
		width: 320,
		height: 240,
		borderRadius: 6,
	},

	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	cityList: {
		width: '90%',
		paddingTop: 50,
	},

	cityItem: {
		width: '100%',
		height: 430,
		paddingHorizontal: 20,
		paddingTop: 10,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 6,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},

	cityName: {
		fontSize: 24,
		fontWeight: '600',
	},
	cityPopulationIcon: { marginRight: 5 },

	cityPopulation: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 },

	cityImage: {
		resizeMode: 'cover',
		width: '100%',
		height: 200,
		borderRadius: 6,
		marginTop: 10,
	},

	cityDataLabel: {
		marginRight: 10,
		width: 80,
	},

	cityArea: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},

	cityAreaIcon: {
		marginRight: 5,
	},

	cityDetails: {
		width: '100%',
		display: 'flex',
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
