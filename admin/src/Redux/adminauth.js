import { adminapiSlice } from "./adminapiSlice";

const ADMIN_URL='/admin'

export const adminAuth=adminapiSlice.injectEndpoints({
    endpoints:(builder)=>({
        adminlogin:builder.mutation({
            query:(data)=>({
                url:`${ADMIN_URL}/adminlogin`,
                method:'POST',
                body:data
            })
        }),
        logout:builder.mutation({
            query:()=>({
              url:`${ADMIN_URL}/logout` ,
              method:'POST' 
            })
        })
    })
})

export const {useAdminloginMutation,useLogoutMutation}=adminAuth
