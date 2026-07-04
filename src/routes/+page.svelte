<svelte:head>
	<title>Blackline FC</title>
	<meta
		name="description"
		content="Build, maintain and protect a realistic power grid in Blackline FC."
	/>
</svelte:head>

<script lang="ts">
	const year = new Date().getFullYear();
</script>

<div class="page">
	<section class="hero">
		<p class="eyebrow">A realistic power grid simulator.</p>

		<h1>
			Build. Maintain.
			<span class="accent">Expand.</span>
		</h1>

		<p class="description">
			In <strong>Blackline - Failure Cascade</strong>, you are the first operator
			of your sector. Design, construct and maintain a realistic electrical grid,
			balance production and demand, and make sure the lights never go out.
		</p>

		<div class="buttons">
			<a href="#about" class="primary">Learn More</a>

			<!-- <a href="/download" class="secondary">
				Wishlist
			</a> -->
		</div>
	</section>

	<section id="about" class="features">
		<div class="feature">
			<h2>Realistic Grid Building</h2>

			<p>
				Every cable matters. Connect generators, transformers, substations,
				breakers and consumers exactly how and where you want.
			</p>
		</div>

		<div class="feature">
			<h2>Maintain Stability</h2>

			<p>
				Keep your network operating at a stable frequency while balancing
				production and demand across your entire sector.
			</p>
		</div>

		<div class="feature">
			<h2>Failure Cascade</h2>

			<p>
				One mistake can spread through the entire network. Plan carefully,
				react quickly and prevent a total blackout.
			</p>
		</div>
	</section>

	<section class="lore">
		<p class="eyebrow">The Story</p>

		<h2>The World is Divided.</h2>

		<p>
			A powerful corporation has divided the world into sectors, each powered
			by its own electrical network. You are assigned as the first operator of
			your sector and are responsible for designing and maintaining its entire
			grid.
		</p>

		<p>
			If your network collapses, everything stops. Industries shut down,
			communications disappear, and millions lose power.
		</p>

		<blockquote>
			"But what happens to the operator who lets it fail?"
		</blockquote>

		<p>No one wants to find out.</p>
	</section>

	<section class="cta">
		<h2>More information coming soon.</h2>

		<p>
			Development has been ongoing since September 27th, and we'll continue
			sharing screenshots, mechanics and development updates over time.
		</p>

		<!-- <a href="/blog" class="primary">
			Development Blog
		</a> -->
	</section>

	<footer>
		© {year} Damaged Engineer Interactive
		-
		Website inspired by
		<a href="https://azin-lang.org">
			<span class="accent">Azin</span>
		</a>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #09090b;
		font-family:
			Inter,
			system-ui,
			sans-serif;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: #09090b;
		color: white;
	}

	.hero,
	.features,
	.lore,
	.cta {
		animation: fadeIn .5s ease-out;
	}

	.hero {
		min-height: 100vh;
		max-width: 900px;
		margin: 0 auto;
		padding: 5rem 2rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.eyebrow {
		color: #38bdf8;
		font-size: .8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .12em;
		margin-bottom: 1rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(4rem, 10vw, 7rem);
		font-weight: 900;
		letter-spacing: -.05em;
		line-height: .95;
	}

	.accent {
		color: #38bdf8;
	}

	.description {
		max-width: 720px;
		margin-top: 2rem;
		font-size: 1.25rem;
		line-height: 1.8;
		color: #a1a1aa;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		margin-top: 3rem;
		flex-wrap: wrap;
	}

	.primary,
	.secondary {
		padding: 1rem 2rem;
		border-radius: 10px;
		font-weight: 600;
		text-decoration: none;
		transition:
			transform .2s ease,
			background .2s ease,
			border-color .2s ease;
	}

	.primary {
		background: #0ea5e9;
		color: white;
	}

	.primary:hover {
		background: #38bdf8;
		transform: translateY(-2px);
	}

	.secondary {
		border: 1px solid #27272a;
		color: #d4d4d8;
	}

	.secondary:hover {
		border-color: #38bdf8;
		color: white;
	}

	.features {
		width: min(1200px, calc(100% - 3rem));
		margin: 0 auto;
		padding: 8rem 0;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 2rem;
	}

	.feature {
		padding: 2rem;
		background: #111113;
		border: 1px solid #27272a;
		border-radius: 18px;

		transition:
			transform .2s ease,
			border-color .2s ease;
	}

	.feature:hover {
		transform: translateY(-6px);
		border-color: #38bdf8;
	}

	.feature h2 {
		margin: 0 0 1rem;
	}

	.feature p {
		margin: 0;
		color: #a1a1aa;
		line-height: 1.7;
	}

	.lore {
		max-width: 750px;
		margin: 0 auto;
		padding: 8rem 2rem;
	}

	.lore h2 {
		margin: 0 0 2rem;
		font-size: clamp(2.5rem, 6vw, 4rem);
	}

	.lore p {
		color: #a1a1aa;
		line-height: 1.9;
		margin-bottom: 1.5rem;
	}

	blockquote {
		margin: 2rem 0;
		padding-left: 1rem;
		border-left: 3px solid #38bdf8;

		font-size: 1.35rem;
		font-style: italic;
		color: white;
	}

	.cta {
		max-width: 700px;
		margin: 0 auto;
		padding: 8rem 2rem;
		text-align: center;
	}

	.cta h2 {
		margin: 0 0 1rem;
		font-size: clamp(2rem, 5vw, 3rem);
	}

	.cta p {
		color: #a1a1aa;
		line-height: 1.8;
	}

	footer {
		padding: 2rem;
		text-align: center;
		font-size: .9rem;
		color: #71717a;
	}

	footer a {
		text-decoration: none;
	}

	/* yoinked straight out of https://spatulari.com */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(12px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>