<script>

  import { Meteor } from 'meteor/meteor'
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';
  import { Tasks } from '../../api/tasks.js'
  import { onMount } from 'svelte'
  import Task from '../comps/Task'
  import {querystring} from 'svelte-spa-router'
  import qs from 'simple-query-string'

  let newTask = ""
  let currentUser
  let tasks
  let checked
  let totalTasks

  onMount(async () => {
    await Meteor.subscribe('publishedTasks')
  })

  $: {
    if($querystring) {
      tagId = qs.parse($querystring).tagId
    }

    currentUser = useTracker(() => Meteor.user())
    if($currentUser) {
      tasks = useTracker(() => Tasks.find({ _id: Meteor.userId, tagId: tagId}, { sort: { createdAt: -1 } }).fetch())

      totalTasks = Object.keys($tasks).length
      checked = Object.keys($tasks.filter(task => task.checked)).length
    }
  }

  const handleSubmit = (event) => {
    Meteor.call('tasks.insert', newTask, tagId)
    newTask = ""
  }
     
</script>
 
 
<div class="container">
  {#if $currentUser}
    <header>
      <form on:submit|preventDefault={handleSubmit}>
          Create a task
          <input type="text" placeholder="Type to add a new task" bind:value="{newTask}" />
        </form>
      <p>Hello {$currentUser.username}, you have completed {checked} out of {totalTasks} tasks under this tag</p>
    </header>
    <ul class="todos">
      {#each $tasks as task (task._id)}
        <Task
          key={task._id}
          task={task}
        />
      {/each}
    </ul>
  {/if}
</div>


<style>
  
  ul.todos{
    list-style-type: none;
  }

</style>