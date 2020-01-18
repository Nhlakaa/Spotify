import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import './main.scss';

const activeLink = {color : 'white'}
const inactiveLink = { color : '#D2D2D2'}

const pages = {
	featured : {
		name: 'featured',
		path: '/',
	},
	categories: {
		name: 'categories',
		path: '/browse/categories'
	},
	new: {
		name: 'new releases',
		path: '/browse/new-releases'
	},
	discover: {
		name: 'discover',
		path: '/browse/discover'
	}
};

const Nav = props => {

	const [page] = useState(pages);

	return (
		<div className='navigation'>
		 <div className='nav-container'>

		  <Featured 
		  	path={page.featured.path} 
		  	name={page.featured.name} 
		  	active={page.featured.path === props.location.pathname}
		   
		  />
		  
		  <Categories 
		  path={page.categories.path} 
		  name={page.categories.name} 
		  active={page.categories.path === props.location.pathname}

		  />

		  <New 
		  path={page.new.path} 
		  name={page.new.name} 
		  active={page.new.path === props.location.pathname}

		  />

		  <Discover 
		   path={page.discover.path} 
		   name={page.discover.name}
		   active={page.discover.path === props.location.pathname}

		 />

		 </div>
		</div>
	)
}




const Featured = props => {
	return (
			<div className='nav-item-container'>
				<div className='nav-item-content'>
				
					<Link to={props.path} 
					  	style={ props.active ? activeLink : inactiveLink}>
					  	{props.name}
					</Link>

					{props.active && (<div className='highlight'></div>)}
				</div>
			</div>
		)
}

const Categories = props => {
	return (
			<div className='nav-item-container'>
				<div className='nav-item-content'>

					<Link to={props.path} 
						style={ props.active ? activeLink : inactiveLink}>
						{props.name}
					</Link>
				
				{ props.active && (<div className='highlight'></div>)}		
				</div>
			</div>
		)
}

const New = props => {
	return (
			<div className='nav-item-container'>
				<div className='nav-item-content'>
					
					<Link to={props.path} 
						style={ props.active ? activeLink : inactiveLink}>
						{props.name}
					</Link>
					
					{props.active && (<div className='highlight'></div>)}
				</div>
			</div>
		)
}

const Discover = props => {
	return (
			<div className='nav-item-container'>
				<div className='nav-item-content'>

					<Link to={props.path} style={ props.active ? activeLink : inactiveLink}>
						{props.name}
					</Link>

					{props.active && (<div className='highlight'></div>)}
				</div>
			</div>
		)
}


export default withRouter(Nav);