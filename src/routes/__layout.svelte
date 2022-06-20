<script>
	import { theme } from '$lib/theme';

	if ($theme == 'light') {
		document.body.classList.add('light');
		document.body.classList.remove('dark');
	} else {
		document.body.classList.add('dark');
		document.body.classList.remove('light');
	}
</script>

<slot />

<style lang="scss"></style>
