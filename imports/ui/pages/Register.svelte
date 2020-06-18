<script>
  import {useTracker} from 'meteor/rdb:svelte-meteor-data'
  import {push} from 'svelte-spa-router'

	let email = ""
	let password = ""
  let currentUser

	function handleSubmit() {
		Accounts.createUser({
			email,
			password
		}, function(err) {
			if(err) {
				alert(err.reason)
				email = ""
				password = ""
			} else {
				push('#/')
			}
		})
	}	


  $: {
	  currentUser = useTracker(() => Meteor.user())
	}
</script>


{#if !$currentUser}
	<h2>Register</h2>
	<form on:submit|preventDefault={handleSubmit}>
	  <p>Email: <input type="email" bind:value={email}></p>

	  <p>Password: <input type="password" bind:value={password}></p>

	  <p><input type="submit" value="Register"></p>
	</form>
{/if}