<template>
	<fragment>
		<!-- Render appropriate layout component -->
		<component :is="currentLayoutComponent">
			<!-- Pass through all the slots. -->
			<template v-for="slotName in Object.keys($slots)" #[slotName]="slotProps">
				<slot :name="slotName" v-bind="slotProps" />
			</template>
		</component>
	</fragment>
</template>

<script>
import { computed } from 'vue';
import DashboardLayout from './components/DashboardLayout';
import AuthLayout from './components/AuthLayout';
import { useLayout } from './composables/useLayout';

export default {
	name: 'LayoutsLayout',
	setup() {
		const { layout, LAYOUTS } = useLayout();

		const layoutComponents = {
			[LAYOUTS.dashBoard]: DashboardLayout,
			[LAYOUTS.auth]: AuthLayout,
		};
		const currentLayoutComponent = computed(() => layoutComponents[layout.value]);
		return { currentLayoutComponent };
	},
};
</script>
