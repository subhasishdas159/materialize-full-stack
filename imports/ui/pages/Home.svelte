<script>
	import {onMount} from 'svelte'
	let modal1

	onMount(()=> {
		M.Modal.init(modal1)
		M.Modal.getInstance(modal1).open()
	})
</script>

<!-- Modal Trigger -->
<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

<!-- Modal Structure -->
<div id="modal1" class="modal bottom-sheet" bind:this={modal1}>
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>