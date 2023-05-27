import { Outlet, } from 'react-router-dom';


import Footer from "@/components/reception/footer"
import Header from "@/components/reception/header"
import { FloatButton } from 'antd';
import 'default-passive-events'
// import intercept from './router/intercept';

const App = () => {
	
	return (
		<>
			<Header />
			<main>
				<section className='section'>
					<Outlet />
				</section>
			</main>
			<FloatButton.BackTop className='BackTop'/>
			<Footer />
		</>
	)
}

export default App
