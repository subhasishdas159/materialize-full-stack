<script>
	import { useTracker } from 'meteor/rdb:svelte-meteor-data'


	let currentUser

  $: {
	  currentUser = useTracker(() => Meteor.user())
	}
</script>

<h1>Todo List</h1>

<ul>
	{#if !$currentUser}
		<li><a href="#/register">Register</a></li>
		<li><a href="#/login">Login</a></li>
	{:else}
		<li><a href="#/tasks?tagId=12">Tasks</a></li>
		<li><a href="#/">Home</a></li>
		<li><a href="#/logout">Logout</a></li>
	{/if}
</ul>

