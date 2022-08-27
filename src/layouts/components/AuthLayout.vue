<template>
	<div class="container mx-auto" :class="$style.authLayout">
		<header :class="$style.header">
			<slot name="header" />
		</header>
		<main :class="$style.content">
			<slot name="content" />
		</main>
		<footer :class="$style.footer">
			<slot name="footer" />
		</footer>
	</div>
</template>

<script>
export default {
	name: 'AuthLayout',
};
</script>

<style module>
.authLayout {
	display: grid;
	grid-template-areas: 'header' 'main' 'footer';
}
</style>
