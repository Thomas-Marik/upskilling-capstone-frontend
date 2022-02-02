import React from 'react';


const links=[
    {id:1,name:"Home",path:"/",icon:"home"},
    {id:2,name:"New Account",path:"/education",icon:"new account"},
    {id:3,name:"Find Customer",path:"/work",icon:"find customer"},
    {id:4,name:"Find Transcation",path:"/projects",icon:"edit customer"},
   
]



const ManagerNav=()=> {
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
  ;
}

export default ManagerNav;
