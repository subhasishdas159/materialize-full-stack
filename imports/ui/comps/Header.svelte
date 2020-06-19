<script>
	import { useTracker } from 'meteor/rdb:svelte-meteor-data'
	import {push} from 'svelte-spa-router'
	import {onMount} from 'svelte'

	let currentUser
	let mobileDemo

  onMount(() => {
  	M.Sidenav.init(mobileDemo)
  })

  $: {
	  currentUser = useTracker(() => Meteor.user())
	}

	function handleClick() {
		M.Sidenav.getInstance(mobileDemo).close()
	}
</script>


<div class="navbar-fixed">
	<nav class="blue darken-3">
	  <div class="nav-wrapper">
	    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			<div class="container">
		    <a href="#!" class="brand-logo">Logo</a>
		    <ul class="right hide-on-med-and-down">
		      {#if !$currentUser}
						<li><a href="#/register">Register</a></li>
						<li><a href="#/login">Login</a></li>
					{:else}
						<li><a href="#/tasks?tagId=12">Tasks</a></li>
						<li><a href="#/">Home</a></li>
						<li><a href="#/logout">Logout</a></li>
					{/if}
		    </ul>
			</div>
	  </div>
	</nav>
</div>

<ul id="mobile-demo" class="sidenav" bind:this={mobileDemo}>
  <li><div class="user-view">
    <div class="background">
      <img src="earth.jpg">
    </div>
    <a href="#user"><img class="circle" src="cat.jpg"></a>
    <a href="#name"><span class="white-text name">John Doe</span></a>
    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
  </div></li>

  {#if !$currentUser}
		<li><a class="waves-effect" on:click={handleClick} href="#/register">Register</a></li>
		<li><a class="waves-effect" on:click={handleClick} href="#/login">Login</a></li>
	{:else}
		<li><a class="waves-effect" on:click={handleClick} href="#/tasks?tagId=12">Tasks</a></li>
		<li><a class="waves-effect" on:click={handleClick} href="#/">Home</a></li>
		<li><a class="waves-effect" on:click={handleClick} href="#/logout">Logout</a></li>
	{/if}
</ul>
