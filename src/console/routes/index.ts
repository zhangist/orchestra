import Root from './common/root'
import Default from './site/default'
import Login from './site/login'

const routes = [
  {
    component: Root,
    routes: [
      {
        component: Default,
        exact: true,
        path: '/',
      },
      {
        component: Login,
        path: '/login',
      },
    ],
  },
]

export default routes
