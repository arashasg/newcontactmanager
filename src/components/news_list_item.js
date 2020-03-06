import React from 'react'

const user={
    name:'leonel',
    lname:'messi',
    age:34
}



 const ListItem  = () => {
    return (
        <div>
            <div>it's {user.name+" "+user.lname+"  "+(new Date()).getFullYear()}</div>
        </div>
    )
}
export default ListItem;
