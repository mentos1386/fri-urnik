import { Route, IndexRoute } from 'react-router';

import {
    Root,
    Home,
    Schedule
} from '~/views';

const routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path=":field/:id" component={Schedule} />
    </Route>
);

export default routes;