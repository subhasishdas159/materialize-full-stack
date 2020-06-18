<script>
	import {onMount} from 'svelte'

	onMount(() => {
		Meteor.logout()
	})
</script>

<h2>
	You have successfully logged out!
</h2>
<p>
	Click <a href="#/">here</a> to go to homepage.
</p>