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
			<!-- Layout content slots -->
		</Layout>
	</div>
</template>

<script>
import Layout from '@/layouts/Layout';
import { useLayout } from '@/layouts/composables/useLayout';

export default {
	components: {
		Layout,
	},
	setup() {
		const { setLayout, LAYOUTS } = useLayout();
		return {
			setLayout,
			LAYOUTS,
		};
	},
};
</script>
