import { ReactNode, useCallback, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import {Route,Routes,} from "react-router-dom";
import PrivateRoute from "@/router/PrivateRoute";
import routerItems from "@/router/routerItems";

const rotuerViews = (
	// const loginState = useSelector((state: any) => state.public.loginState);

	// 处理我们的routers
	(routeList) => {
		return routeList.map(
			(item) => {
				return (
					<Route
						path={item.path}
						element={
							<PrivateRoute item={item} meta = {item.meta} auth={item.meta.auth} key={item.path}>
								{<item.element />}
							</PrivateRoute>
						}
						key={item.path}
					>
						{/* 递归调用，因为可能存在多级的路由 */}
						{item?.children && rotuerViews(item.children)}
					</Route>
				);
			}
		);
	}
);

const RotuerApp = () => {
	return <Routes>{rotuerViews(routerItems)}</Routes>;
}

export default RotuerApp;