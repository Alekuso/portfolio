<script>
	import { theme } from '$lib/theme';

	if ($theme == 'light') {
		document.body.classList.add('light');
	} else {
		document.body.classList.remove('light');
	}
</script>

<slot />

<style lang="scss"></style>
