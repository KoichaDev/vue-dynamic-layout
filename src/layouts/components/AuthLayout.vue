<template>
	<div class="container mx-auto" :class="$style.authLayout">
		<main :class="$style.content">
			<slot name="content" />
		</main>
		<footer :class="$style.footer">
			AuthLayout
			<slot name="footer" />
		</footer>
	</div>
</template>

<script>
export default {};
</script>

<style module>
.authLayout {
	display: grid;
	grid-template-rows: 1fr 4rem;
	grid-template-columns: 1fr;
	height: 600px;
	@apply bg-purple-300;
}
.content,
.footer {
	display: grid;
	place-items: center;
}
.content {
	grid-area: 1 / 1 / 2 / 2;
	@apply bg-purple-300;
}
.footer {
	grid-area: 2 / 1 / 3 / 2;
	@apply bg-gray-400;
}
</style>
