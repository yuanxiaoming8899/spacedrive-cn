import { RouteObject } from 'react-router';

export default [
	{ path: 'general', lazy: () => import('./general') },
	{ path: 'account', lazy: () => import('./account') },
	{ path: 'usage', lazy: () => import('./usage')},
	{ path: 'appearance', lazy: () => import('./appearance') },
	{ path: 'keybindings', lazy: () => import('./keybindings') },
	{ path: 'extensions', lazy: () => import('./extensions') },
	{ path: 'privacy', lazy: () => import('./privacy') },
	{ path: 'backups', lazy: () => import('./backups') }
] satisfies RouteObject[];
