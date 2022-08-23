<template>
	<fragment v-if="tag === 'button'">
		<button
			role="button"
			:class="[$style.baseButton, $style[`baseButton--${variant}`], buttonClassName]"
		>
			<slot />
		</button>
	</fragment>

	<fragment v-else>
		<router-link
			:is="tag"
			:to="to"
			role="button"
			:class="[$style.baseButton, $style[`baseButton--${variant}`], buttonClassName]"
		>
			<slot />
		</router-link>
	</fragment>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		role: {
			type: String,
			default: 'a',
		},
		tag: {
			type: String,
			default: 'a',
		},
		to: {
			type: String,
			require,
		},
		variant: {
			type: String,
			default: '',
			validator: (value) => {
				return ['primary', 'danger', 'link'].includes(value);
			},
		},
		buttonClassName: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss" module>
.baseButton {
	@apply inline-block px-3 py-2 rounded-md cursor-pointer outline-none transition-colors duration-200;

	&--primary {
		@apply bg-blue-700 text-blue-100;

		&:hover {
			@apply bg-blue-800;
		}
	}

	&--danger {
		@apply bg-red-600 text-zinc-100;

		&:hover {
			@apply bg-red-700;
		}
	}

	&--link {
		@apply text-blue-700 px-0;

		&:hover {
			@apply text-blue-900 underline;
		}
	}
}
</style>
