
<section class="description-friche">
	<h1>Description d'une friche</h1>
	{#each fricheEntries as [question, answer]}
	<h2>{question}</h2>
	{answer}
	{/each}
</section>

<style>
	.description-friche h2{
		font-size: 1.8rem;
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-color: #CCC;
	}

</style>

<script>
	export let descriptionFriche;

	$: fricheEntries = Object.entries(descriptionFriche).filter(([key]) => {
		return !['ID', 'Heure de début', 'Heure de fin', 'Adresse de messagerie', 'Nom'].includes(key)
	})
</script>