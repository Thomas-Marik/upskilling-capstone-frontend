import React from 'react';


const links=[
    {id:1,name:"Home",path:"/",icon:home},
    {id:2,name:"Education",path:"/education",icon:school},
    {id:3,name:"Experience",path:"/work",icon:work},
    {id:4,name:"Projects",path:"/projects",icon:projects},
    {id:5,name:"Skills",path:"/skills",icon:skills},
    {id:6,name:"Contact",path:"/contact",icon:contacts},
]



const ManagerNav=()=> {
  return (
    <div className='navbar-list'>
    <div >
        {links.map((link) => (
            <div className='navbar-item'>
                <NavBarItem
                user={props}
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
  ;
}

export default ManagerNav;
