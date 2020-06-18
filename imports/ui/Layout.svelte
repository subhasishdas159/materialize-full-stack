<script>
  import Router from 'svelte-spa-router'
  
  import Header from './comps/Header'
  
  import Home from './pages/Home'
  import Tasks from './pages/Tasks'
  import Register from './pages/Register'
  import Login from './pages/Login'
  import Logout from './pages/Logout'
  import NotFound from './pages/NotFound'

 const routes = {
    '/': Home,
    '/tasks': Tasks,
    '/register': Register,
    '/login': Login,
    '/logout': Logout,
    '*': NotFound
	}
</script>

<Header />

<Router {routes} />
