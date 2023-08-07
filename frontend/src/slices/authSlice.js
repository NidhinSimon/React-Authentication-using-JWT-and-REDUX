import { createSlice } from "@reduxjs/toolkit";
import { parse } from "dotenv";



const initialState={
    userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}
console.log(initialState,'{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}')

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            console.log(action.payload,'pppppppppppppppp<<><>aciton .payloddd<><<<pppppppppp')
            state.userInfo=action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.userInfo=null;
            localStorage.removeItem('userInfo')
        },        
    },
});


export const{setCredentials,logout}=authSlice.actions
export default authSlice.reducer