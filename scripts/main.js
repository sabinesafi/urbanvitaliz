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
 * Identification
 * @property {string} [id]
 * @property {string} name
 * @property {string} address
 * @property {string} addressComplement
 * @property {string} communeINSEECode
 * @property {string} [parcellesCadastrales]
 * @property {string} [perimeterDescription]
 * @property {string} [area]
 * Occupation actuelle et propriété du site
 * @property {string} occupancy - Le site est-il occupé ? Site totalement vacant / Occupé en partie de manière temporaire / ... / Pas d'information
 * @property {string} occupancyDescription
 * @property {string} currentOccupents
 * @property {string} currentPublicOwners
 * @property {string} currentPrivateOwners
 * @property {string} ownersRelatedRights 
 * Cessation d'activité
 * @property {string} IPCEStatus
 * @property {string} vacantSinceDate
 * @property {string} formerOccupantName
 * @property {string} formerActivity
 * @property {string} detailedFormerActivity
 * @property {string} safetyStatus
 * @property {string} formerOperatorRequirementsFulfillmentStatus
 * Nature de l'artificialisation et archéologie
 * @property {string} built
 * @property {string} waterproofingRate
 * @property {string} soilTypes
 * @property {string} archelogyObligation
 * @property {string} archelogyObligationStatus
 * Caractéristiques du bâti
 * @property {string} patrimonialStatus
 * @property {string} floorArea
 * @property {string} floors
 * @property {string} builtQuality
 * @property {string} builtAge
 * 
 * 
 */

/**
 * @param {unknown} csvObj
 * @return {Friche} 
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
		
		IPCEStatus: csvObj[`Le site est-il classé ICPE ?`],
		vacantSinceDate: csvObj[`Le site est vacant (ou partiellement vacant) depuis l'année`],
		formerOccupantName: csvObj[`Nom de l'ancien occupant du site`],
		formerActivity: csvObj[`Quelle est l'ancienne activité du site ?`],
		detailedFormerActivity: csvObj[`Décrire plus finement l'ancienne activité si possible`],
		safetyStatus: csvObj[`Le site est-il mis en sécurité ?`],
		formerOperatorRequirementsFulfillmentStatus: csvObj[`Le dernier exploitant a-t-il été purgé de ses obligations ?`],
		
		built: csvObj[`Le site est-il bâti ?`],
		waterproofingRate: csvObj[`Quel taux d'imperméabilisation des sols estimez-vous ?`],
		soilTypes: csvObj[`Sur le site, les sols présents sont de type`],
		archelogyObligation: csvObj[`Est-ce que le site est soumis à obligation de fouille ?`],
		archelogyObligationStatus: csvObj[`Est-ce qu'il y a déjà eu des fouilles sur ce site ?`],

		patrimonialStatus: csvObj[`Le bâti a-t-il un aspect patrimonial ?`],
		floorArea: csvObj[`Surface de plancher (ordre de grandeur)`],
		floors: csvObj[`Nombre de niveaux`],
		builtQuality: csvObj[`Etat global du bâti`],
		builtAge: csvObj[`Age du bâti (approximatif)`],
	}
}

/*	
	
	
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
