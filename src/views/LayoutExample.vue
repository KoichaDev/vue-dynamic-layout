<template>
	<div>
		<div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
			<button role="link" title="Layout Standard" @click.prevent="setLayout(LAYOUTS.standard)">
				Layout standard
			</button>
			<button role="link" title="Layout Standard" @click.prevent="setLayout(LAYOUTS.auth)">
				Layout auth
			</button>
		</div>
		<Layout class="mx-auto max-w-7xl">
			<template #header> </template>
			<!-- Layout content slots -->
		</Layout>
	</div>
</template>

<script>
export default {
	name: 'ViewAuth',
};
</script>
