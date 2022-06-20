<script>
	import { onMount } from 'svelte';
	import ThemeButton from '../components/ThemeButton.svelte';

	let input = '';
	let output = '';

	onMount(() => {
		let cmd = document.getElementById('cmd');
		cmd.addEventListener('keydown', (e) => {
			if (e.code == 'Enter') {
				command(input);
			}
		});
	});

	function command(data) {
		document.getElementById('msg').classList.remove('error');
		input = '';
		switch (data) {
			case '':
				write('');
				break;
			case 'help':
				write("Here's the list of commands!\n" + 'help');
				break;
			default:
				write('Unknown command', true);
				break;
		}
	}

	function write(x, y = false) {
		output = x;
		if (y) {
			document.getElementById('msg').classList.add('error');
		}
	}
</script>

<svelte:head>
	<title>Alex's portfolio</title>
</svelte:head>

<div class="wrapper">
	<ThemeButton />
	<h1 class="title">I'm<br />Alex Olemans.</h1>
	<p class="subtitle">
		Also known as "Alexou" on the internet, I'm a student and a fullstack developer.
	</p>
	<hr />
	<div class="terminal">
		<label class="command">
			<span>$></span><input id="cmd" type="text" placeholder="help" bind:value={input} />
		</label>
		<div class="output">
			<span id="msg" class="msg">{output}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding: 1rem;

		.title {
			mix-blend-mode: difference;
			font-size: 2rem;
		}

		.subtitle {
			mix-blend-mode: difference;
			max-width: 20rem;
			font-size: 1rem;
		}

		hr {
			width: 100%;
			border: 0;
			border-top: 2px solid hsl(257, 10%, 10%);
			border-radius: 1rem;
			margin: 2rem 0;
		}

		.terminal {
			.command {
				color: $terminal-color;
				font-weight: bold;
				font-size: 1rem;

				input {
					background: transparent;
					margin-left: 0.5rem;
					border: none;
					color: gray;
					font-weight: bold;
				}

				input:focus {
					outline: none;
				}

				input::placeholder {
					color: darkgray;
				}
			}

			.output {
				margin-left: 2.5rem;
				margin-top: 1rem;
				max-width: 40rem;
			}

			:global(.error) {
				color: red;
				font-weight: bold;
			}
		}
	}

	@media (min-width: 768px) {
		.wrapper {
			padding: 1.5rem 5rem;

			.title {
				font-size: 3rem;
			}

			.subtitle {
				max-width: 30rem;
				font-size: 1.7rem;
			}

			hr {
				max-width: 40rem;
				border-top: 4px solid hsl(257, 10%, 10%);
			}

			.terminal {
				.command {
					font-size: 1.5rem;
				}

				input {
					font-size: 1.5rem;
				}
			}
		}
	}
</style>
