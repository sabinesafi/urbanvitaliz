// @ts-check

import {csv} from 'd3-fetch'

//import App from './App.svelte';
import DescriptionFriche from './DescriptionFriche.svelte';

/**
 * @typedef {object} Person
 * @property {string} id
 * @property {string} name
 * @property {string} emailAddress
 */

/**
 * @typedef {object} Friche
 * @property {string} [id]
 * @property {string} name
 * @property {string} address
 * @property {string} addressComplement
 * @property {string} communeINSEECode
 * @property {string} [parcellesCadastrales]
 * @property {string} [perimeterDescription]
 * @property {string} [area]
 * 
 * @property {string} occupancy - Le site est-il occupé ? Site totalement vacant / Occupé en partie de manière temporaire / ... / Pas d'information
 * @property {string} occupancyDescription
 * @property {string} currentOccupents
 * @property {string} currentPublicOwners
 * @property {string} currentPrivateOwners
 * @property {string} ownersRelatedRights 
 * 	
 * @property {string} formerActivity - Quelle est l'ancienne activité du site ?	-
 * 
 */

/**
 * @param {unknown}  csvObj
 * @return {Friche} This is the result
 */
function makeFriche(csvObj){
	return {
		name: csvObj[`Nom du site`],
		address: csvObj[`Adresse du site`],
		communeINSEECode: csvObj[`Code INSEE de la commune où se situe le site`],
		addressComplement: csvObj[`Complément de localisation si besoin`],
		parcellesCadastrales: csvObj['Numéros des parcelles cadastrales concernées'],
		perimeterDescription: csvObj[`Description du périmètre de la friche (en attendant qu'on vous invite à le dessiner directement !)`],
		area: csvObj[`Une idée de la surface globale (m²) ?`],

		occupancy: csvObj[`Le site est-il occupé ?`],
		occupancyDescription: csvObj[`Description libre de l'occupation éventuelle (normalement question conditionnelle)`],
		currentOccupents: csvObj[`Nom des éventuels occupants actuels et activité`],
		currentPublicOwners: csvObj[`Listez les propriétaires publics actuels et leurs droits`],
		currentPrivateOwners: csvObj[`Listez les propriétaires privés actuels et leurs droits`],
		ownersRelatedRights: csvObj[`Existe-t-il des droits liés à des propriétaires inconnus ?`],
		
		formerActivity: csvObj[`Quelle est l'ancienne activité du site ?`]
	}
}


/*	
	
	
1. Le site est-il classé ICPE ?	Site ICPE
2. Le site est vacant (ou partiellement vacant) depuis l'année	Vacant depuis
3. Nom de l'ancien occupant du site	Ancien occupant
4. Quelle est l'ancienne activité du site ?	-
5. Décrire plus finement l'ancienne activité si possible	-
6. Le site est-il mis en sécurité ?	Site mis en sécurité
7. Le dernier exploitant a-t-il été purgé de ses obligations ?	Obligations du dernier occupant
	
	
1. Le site est-il bâti ?	Bâti 
2. Quel taux d'imperméabilisation des sols estimez-vous ?	Imperméabilisation estimée
3. Sur le site, les sols présents sont de type	Types de sols majoritaires
4. Est-ce que le site est soumis à obligation de fouille ?	Fouilles archéologiques
5. Est-ce qu'il y a déjà eu des fouilles sur ce site ?	- 
	
	
1. Le bâti a-t-il un aspect patrimonial ?	Patrimoine architectural 
2. Surface de plancher (ordre de grandeur)	Surface de plancher
3. Nombre de niveaux	Nombre de niveaux
4. Etat global du bâti	Etat du bâti
5. Age du bâti (approximatif)	Âge estimé
	
	
1. Si ce site est ICPE, avez-vous pu récupérer les éléments de connaissance de la pollution auprès de la DREAL ?	-
2. Votre connaissance de la pollution sur	"Etat des sols
Etat des eaux
Etat des bâtiments"
3. En cas de suspicion ou certitude de pollution, indiquez votre estimation de l'importance de la pollution	


*/


csv('./data/descriptions-friches.csv')
.then(descriptionsFrichesCSV => {
	const descriptionsFriches = descriptionsFrichesCSV.map(makeFriche)

	console.log('descriptionsFriches', descriptionsFriches)
	
	const app = new DescriptionFriche({
		target: document.querySelector('.svelte-main'),
		props: {
			descriptionFriche: descriptionsFriches[0]
		}
	});
})
