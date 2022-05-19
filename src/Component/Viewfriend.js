import axios from 'axios'
import React, { useState } from 'react'

const Viewfriend = () => {
        var [viewlist,setViewlist]=useState([])
        var [loadstatus,setLoadstatus]=useState(true)
        axios.get("https://dummyapifriends.herokuapp.com/view").then(
            (response)=>{
                console.log(response.data)
                setViewlist(response.data)
                setLoadstatus(false)
    
            }
        )
    
  return (
    <div><div>

    <div>


    <div class="container">
<div class="row ">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
        <table class="table table-info table-striped" >
        <thead>
  <tr>
    
    <th scope="col"> NAME</th>
    <th scope="col">FRIEND'S NAME </th>
    <th scope="col">FRIEND'S NICK NAME</th>
    <th scope="col">DESCRIPTION</th>
   
   
  </tr>
</thead>
      {loadstatus ?  <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>:
      
      <tbody>
{
    viewlist.map((value,key)=>{
        return <tr>
                        <th><p class="card-text">{value.name}</p></th>
                        <td><p class="card-text">{value.friendName}</p></td>
                        <td><p class="card-text">{value.friendNickName}</p></td>
                        <td><p class="card-text">{value.DescribeYourFriend}</p></td>

                        </tr>     
    
    })}
    </tbody>

      }



    </table>
        </div>
    </div>
</div>

</div>
</div></div>
  )
}

export default Viewfriend