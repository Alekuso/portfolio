<script>
	import { theme } from '$lib/theme';

	function changeTheme() {
		theme.set($theme === 'light' ? 'dark' : 'light');

		if ($theme == 'light') {
			document.body.classList.add('light');
			document.body.classList.remove('dark');
		} else {
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		}
	}
</script>

<div class="theme-button" on:click={changeTheme}>
	{#if $theme === 'dark'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="black"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	{/if}
</div>

<style lang="scss">
	.theme-button {
		cursor: pointer;
		position: absolute;
		right: 0;
		transform: translateX(-200%);
		z-index: 1;
		width: 24px;
		height: 24px;
	}

	svg {
		mix-blend-mode: difference;
	}
</style>
