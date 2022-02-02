import React from 'react';


const links=[
    {id:1,name:"Home",path:"/",icon:"accounts"},
    {id:2,name:"Education",path:"/education",icon:"bio"},
    {id:3,name:"Experience",path:"/work",icon:"edit"},
    {id:4,name:"Projects",path:"/projects",icon:"transfer"},
]


function CustomerNav(props) {
 
  return (
    <div className='navbar-list'>
        <div >
            {links.map((link) => (
                <div className='navbar-item'>
                    <NavBarItem
                   
                    key={link.id} 
                    name={link.name}
                    path={link.path}
                    icon={link.icon}               
                    />
                </div>
            ))}
        </div>
    </div>
)
}

export default CustomerNav;
