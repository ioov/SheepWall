import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './router/index.jsx'
import { RouterProvider, BrowserRouter } from "react-router-dom"
import '@/style/index.scss'
import Loading from '@/components/Loading.jsx'
import RotuerApp from '@/router/intercept.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<React.Suspense fallback={<Loading />}>
			{/* <RouterProvider router={Routers} /> */}
			<RotuerApp />
		</React.Suspense>
	</BrowserRouter>
	// </React.StrictMode>,
)
