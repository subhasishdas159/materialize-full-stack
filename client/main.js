import { Meteor } from 'meteor/meteor'
import Layout from '../imports/ui/Layout.svelte'
import '../imports/startup/accounts-config.js'
import { Accounts } from 'meteor/accounts-base'
import './materialize/materialize.min.js'
// import './materialize/material-icons.min.css'

// Accounts.onLogout(() => {
//   location.reload() 
// });
 
Meteor.startup(() => {
  new Layout({
    target: document.getElementById('app')
  });
  
	// var elems = document.querySelectorAll('.modal');
 //  var instances = M.Modal.init(elems, {
 //  	inDuration: 125, 
 //  	ourDuration: 125
 //  });

});
