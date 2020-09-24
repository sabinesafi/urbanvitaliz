import {csv} from 'd3-fetch'

//import App from './App.svelte';
import DescriptionFriche from './DescriptionFriche.svelte';

csv('./data/descriptions-friches.csv')
.then(descriptionsFriches => {
	console.log('descriptionsFriches', descriptionsFriches)

	
	const app = new DescriptionFriche({
		target: document.querySelector('.svelte-main'),
		props: {
			descriptionFriche: descriptionsFriches[0]
		}
	});
})
