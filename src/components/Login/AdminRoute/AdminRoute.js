import { CircularProgress } from '@mui/material';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function AdminRoute({ children, ...rest }) {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return (
            <CircularProgress />
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;