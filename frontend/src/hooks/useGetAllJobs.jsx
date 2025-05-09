import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobs } from '@/redux/jobSlice'

const useGetAllJobs = () => {
    const dispatch=useDispatch();
    const {searchedQuery}=useSelector(store=>store.job);
   useEffect(()=>{
    const fetchAllJobs= async ()=>{
        try {
            const res=await axios.get(`https://jobconnect-zvze.onrender.com/api/v1/job/get?keyword=${searchedQuery}`,{withCredentials:true});
            if(res.data.success)
            {
                dispatch(setAllJobs(res.data.jobs));
            }
    
        } catch (error) {
            console.log("error in useGetAllJobs",error)
        }
    }
    fetchAllJobs();
   },[])
}

export default useGetAllJobs