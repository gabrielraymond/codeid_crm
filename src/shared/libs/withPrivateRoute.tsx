/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { DASHBOARD_HOME, DASHBOARD_LOGIN } from '../constants/path';
import { Row, Spin } from 'antd';
import { checkIsAuthRoute, checkIsPrivateRoute } from '../helpers/route';

/**
 *
 * @param WrappedComponent
 * @returns
 * Component with additonal props auth
 * and checking of authentication
 */
export default function withPrivateRoute(WrappedComponent: any) {
	return (props: any) => {
		const router = useRouter();
		const token = cookie.get('token');

		useEffect(() => {
			// token not authenticated & accessing private route
			if (!token && checkIsPrivateRoute(router.route)) {
				router.replace(DASHBOARD_LOGIN);
				return;
			}
			// token authenticated accessing private route then redirect to dashboard home
			if (token && checkIsAuthRoute(router.route)) {
				router.replace(DASHBOARD_HOME);
			}
		}, []);

		// if not authenticated & token accessing private route, render nothing
		// render nothing to wait redirection
		if (!token && checkIsPrivateRoute(router.route)) {
			return null;
		}

		// if authenticated & token accessing auth route, render nothing
		// render nothing to wait redirection
		if (token && checkIsAuthRoute(router.route)) {
			return null;
		}

		return <WrappedComponent {...props} auth={token} />;
	};
}
