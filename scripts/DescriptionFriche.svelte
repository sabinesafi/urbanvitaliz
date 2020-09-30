
<article class="description-friche">
	<h1>Description d'une friche</h1>
	
	<div class="row">
		<section class="identification">
			<h2>{descriptionFriche.name}</h2>
			<h3>Adresse du site</h3>
			{descriptionFriche.address}
			<h3>N° INSEE commune</h3>
			{descriptionFriche.communeINSEECode}
			<h3>Complément de localisation si besoin</h3>
			{descriptionFriche.addressComplement}
			<h3>Parcelles cadastrales</h3>
			{descriptionFriche.parcellesCadastrales}
			<h3>Périmètre</h3>
			{descriptionFriche.perimeterDescription}
			<h3>Surface</h3>
			{descriptionFriche.area}m²
		</section>
		<section class="tabs">
			<a href="#occupation">Occupation actuelle et propriété sur le site</a>
			<a href="#former-activity">Cessation d’activité</a>
			<a href="#artificialisation-archéologie">Nature de l'artificialisation et archéologie</a>
			<a href="#caractéristiques-du-bâti">Caractéristiques du bâti</a>																																																																																																																																																																																																			
		</section>
	</div>

	<section class="tab-content">
		<section id="occupation">
			<h2>Occupation actuelle et propriété sur le site</h2>
			<h3>Le site est-il occupé ?</h3>
			{descriptionFriche.occupancy}
			<h3>Description libre de l'occupation éventuelle</h3>
			{descriptionFriche.occupancyDescription}
			<h3>Occupants actuels</h3>
			{descriptionFriche.currentOccupents}
			<h3>Propriétaires publics actuels</h3>
			{descriptionFriche.currentPublicOwners}
			<h3>Propriétaires privés actuels</h3>
			{descriptionFriche.currentPrivateOwners}
			<h3>Existe-t-il des droits liés à des propriétaires inconnus ?</h3>
			{descriptionFriche.ownersRelatedRights}
		</section>
		<section id="former-activity">
			<h2>Cessation d’activité</h2>

			<h3>Site IPCE</h3>
			{descriptionFriche.IPCEStatus}
			<h3>Vacant depuis</h3>
			{descriptionFriche.vacantSinceDate}
			<h3>Ancien occupant</h3>
			{descriptionFriche.formerOccupantName}
			<h3>Quelle est l'ancienne activité du site ?</h3>
			{descriptionFriche.formerActivity}
			<h3>Détails sur l'activité précédente</h3>
			{descriptionFriche.detailedFormerActivity}
			<h3>Site mis en sécurité</h3>
			{descriptionFriche.safetyStatus}
			<h3>Obligations du dernier occupant</h3>
			{descriptionFriche.formerOperatorRequirementsFulfillmentStatus}

		</section>
		<section id="artificialisation-archéologie">
			<h2>Nature de l'artificialisation et archéologie</h2>

			<h3>Bâti</h3>
			{descriptionFriche.built}
			<h3>Imperméabilisation estimée</h3>
			{descriptionFriche.waterproofingRate}%
			<h3>Types de sols majoritaires</h3>
			{descriptionFriche.soilTypes}
			<h3>Fouilles archéologiques</h3>
			{descriptionFriche.archelogyObligation}
			<h3>Est-ce qu'il y a déjà eu des fouilles sur ce site ?</h3>
			{descriptionFriche.archelogyObligationStatus}
		</section>
		<section id="caractéristiques-du-bâti">
			<h2>Caractéristiques du bâti</h2>

			<h3>Patrimoine architectural</h3>
			{descriptionFriche.patrimonialStatus}
			
			<h3>Surface de plancher</h3>
			{descriptionFriche.floorArea}%

			<h3>Nombre de niveaux</h3>
			{descriptionFriche.floors}

			<h3>Etat du bâti</h3>
			{descriptionFriche.builtQuality}

			<h3>Âge estimé</h3>
			{descriptionFriche.builtAge}
		</section>
	</section>
</article>

<style>
	.description-friche{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2{
		font-size: 2rem;
		color: #008080;
	}

	h3{
		font-size: 1.8rem;
	}

	.row{
		width: 100%;
		margin-bottom: 1em;
		display: flex;
		flex-direction: row;
	}
	.identification{
		flex: 1;
	}
	.tabs{
		flex: 1;
	}

	.identification, .tabs, .tab-content{
		border: 1px solid #008080; /* TOUTDOUX créer une variable */
		border-radius: 2em;
		padding: 1em;
	}

	.tabs{
		display: flex;
		flex-direction: column;
	}

	.tab-content{
		width: 100%;
	}
	
	.tab-content > section{
		display: none;
	}
	
	.tab-content > section:target{
		display: block;
	}
</style>

<script>
	// @ts-check

	/**
	* @type {import("./main.js").Friche}
	*/
	export let descriptionFriche;

</script>