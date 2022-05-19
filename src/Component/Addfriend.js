import axios from 'axios'
import React, { useState } from 'react'

const Addfriend = () => {
    var [name,setName]=useState("")
    var [fname,setFriend]=useState("")
    var [nick,setNick]=useState("")
    var [des,setDes]=useState("")
    const changeData=()=>{
        const data={"name":name,"friendName":fname,"friendNickName":nick,"DescribeYourFriend":des,}
        console.log(data)
        axios.post("https://dummyapifriends.herokuapp.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Successfully Added")
                }
                else{
                    alert("Something went Wrong!")
                }
                
            }
        )
    }


  return (
    <div><div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Friend's Name</label>
                    <input onChange={(e)=>{setFriend(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Friend's Nick Name</label>
                    <input onChange={(e)=>{setNick(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Discribe Your friend</label>
                    <input onChange={(e)=>{setDes(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={changeData} class="btn btn-dark">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addfriend