<template>
	<header>
		<nav :class="[$style.header]">
			<p>Todo App</p>

			<ul :class="[$style.header]">
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/login">Login</router-link>
				</li>
				<li>
					<router-link to="/dashboard">Dashboard</router-link>
				</li>
				<li>
					<base-button to="/" title="logout" variant="danger" @click.native="onClick"
						>Logout</base-button
					>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.header {
	display: flex;
	gap: 2em;
	padding: 1.5em;
	align-items: center;

	> .home {
		margin-left: auto;
	}

	ul {
		margin-left: auto;
		list-style: none;
	}
}
</style>
