<template>
	<fragment>
		<!-- Render appropriate layout component -->
		<component :is="currentLayoutComponent">
			<!--
				 Pass through all the slots. The slots is used to identify the binding of the component for rendering it. 
				 Just remember to use the same name as the slot in the component.
			 -->
			<template v-for="slotName in Object.keys($slots)" #[slotName]="slotProps">
				<slot :name="slotName" v-bind="slotProps" />
			</template>
		</component>
	</fragment>
</template>

<script>
import { layoutComputed, LAYOUTS } from './services/pageLayoutService.js';
import StandardLayout from './components/StandardLayout';
import AuthLayout from './components/AuthLayout';

const layoutComponents = {
	[LAYOUTS.standard]: StandardLayout,
	[LAYOUTS.auth]: AuthLayout,
};

export default {
	computed: {
		...layoutComputed,
		currentLayoutComponent() {
			return layoutComponents[this.layout];
		},
	},
};
</script>
