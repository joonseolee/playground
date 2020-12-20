<script lang="ts">
	import type { UserProps } from "./format/User";

	export let user: UserProps;
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Onepage With Svelte.</h1>
	<form action="">
		<input type="text" name="search" />
		<button type="submit">Click</button>
	</form>
</main>
