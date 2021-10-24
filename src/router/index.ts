import React from "react";
import Products from "../pages/Products";
import Home from '../pages/Home'

export interface IRoute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RouteNames {
	HOME = 'product-app/',
	PRODUCTS = '/products'
}

export const routes: IRoute[] = [
	{path: RouteNames.PRODUCTS, exact: true, component: Products},
	{path: RouteNames.HOME, exact: true, component: Home}
]