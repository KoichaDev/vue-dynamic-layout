<template>
	<div>
		<div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
			<button @click.prevent="setLayout(LAYOUTS.standard)">Layout standard</button>
			<button @click.prevent="setLayout(LAYOUTS.auth)">Layout auth</button>
		</div>
		<Layout class="mx-auto max-w-7xl"> <!-- Layout content slots --> </Layout>
	</div>
</template>

<script>
import Layout from '../layouts/Layout';
import { setLayout, LAYOUTS } from '@/layouts/services/pageLayoutService';

export default {
	components: {
		Layout,
	},
	methods: {
		setLayout,
	},
	created() {
		this.LAYOUTS = LAYOUTS;
	},
};
</script>
