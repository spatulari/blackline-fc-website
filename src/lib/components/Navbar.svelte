<script lang="ts">
	import { fly } from 'svelte/transition';

	let open = $state(false);

	function closeMenu() {
		open = false;
	}
</script>

<nav class="navbar">
	<a href="/" class="logo">
		Blackline <span class="accent">FC</span>
	</a>

	<div class="links">
<<<<<<< HEAD
		<!-- <a href="https://docs.azin-lang.org">Documentation</a> -->
=======
>>>>>>> b383f1d09f64d2b2e3e0c148d4a60de822cc0e91
		<a href="/blog">Blog</a>
		<a href="/download">Downloads</a>
		<a href="/links">Links</a>
	</div>

	<button
		class="hamburger"
		aria-label="Toggle navigation"
		onclick={() => (open = !open)}
	>
		{open ? "✕" : "☰"}
	</button>

	{#if open}
		<div class="mobile-menu" transition:fly={{ y: -12, duration: 180 }}>
<<<<<<< HEAD
			<!-- <a href="https://docs.azin-lang.org" onclick={closeMenu}>Documentation</a> -->
=======
>>>>>>> b383f1d09f64d2b2e3e0c148d4a60de822cc0e91
			<a href="/blog" onclick={closeMenu}>Blog</a>
			<a href="/download" onclick={closeMenu}>Downloads</a>
			<a href="/links" onclick={closeMenu}>Links</a>
		</div>
	{/if}
</nav>

<style>
	.navbar {
		position: relative;
		width: min(1200px, calc(100% - 3rem));
		margin: 0 auto;
		padding: 2rem 0;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.7rem;
		font-weight: 800;
		color: white;
		text-decoration: none;
		letter-spacing: -0.03em;
		z-index: 10;
	}

	.accent {
		color: #38bdf8;
	}

	.links {
		display: flex;
		gap: 2.5rem;
	}

	.links a,
	.mobile-menu a {
		color: #a1a1aa;
		text-decoration: none;
		font-size: 0.95rem;
		transition: color .2s ease;
	}

	.links a:hover,
	.mobile-menu a:hover {
		color: #38bdf8;
	}

	.hamburger {
		display: none;
		background: none;
		border: none;
		color: white;
		font-size: 1.8rem;
		cursor: pointer;
		padding: 0;
		z-index: 10;
	}

	.mobile-menu {
		position: absolute;
		top: calc(100% + .75rem);
		left: 0;
		right: 0;

		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		padding: 1.5rem;

		background: rgba(24, 24, 27, .95);
		backdrop-filter: blur(12px);

		border: 1px solid #27272a;
		border-radius: 14px;

		box-shadow: 0 20px 50px rgba(0, 0, 0, .35);

		z-index: 100;
	}

	@media (max-width: 768px) {
		.links {
			display: none;
		}

		.hamburger {
			display: block;
		}
	}

	@media (min-width: 769px) {
		.mobile-menu,
		.hamburger {
			display: none;
		}
	}
</style>