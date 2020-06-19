<script>
  import {useTracker} from 'meteor/rdb:svelte-meteor-data'
  import {push} from 'svelte-spa-router'
 

	let email = ""
	let password = ""
  let currentUser

	function handleSubmit() {
		Meteor.loginWithPassword(email, password, function(err) {
		if(err) {
				email = ""
				password = ""
				alert(err.reason)
			}
		})
	}	

  $: {
	  currentUser = useTracker(() => Meteor.user())
	  if($currentUser) {
			push('#/')
	  }
	}
</script>


{#if !$currentUser}
	<h2>Login</h2>
	<form on:sumbit|preventDefault={handleSubmit}>
	  <p>Email: <input type="email" bind:value={email}></p>

	  <p>Password: <input type="password" bind:value={password}></p>

	  <button class="btn waves-effect waves-light" name="action">Login
	  	<i class="material-icons right">send</i>
		</button>
	</form>
{/if}