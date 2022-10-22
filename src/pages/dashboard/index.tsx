import Home from 'src/features/dashboard/dashboard/home/ui/components/home';
import withPrivateRoute from 'src/shared/libs/withPrivateRoute';

function Dashboard() {
	return <Home />;
}

export default withPrivateRoute(Dashboard);
