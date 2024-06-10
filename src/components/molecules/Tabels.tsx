import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { UseDispatch } from 'react-redux';
import { setDataUser } from '../../redux/reducers/userReducer';

const Tabels = () => {
    const data = useSelector((state: any) => state.user.userData);
    const dispatch = useDispatch();

    const getData = async () => {
        const res = await axios.get('http://localhost:5000/dataUser')
        dispatch(setDataUser(res.data))
        console.log(res.data)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <table className=''>
            <thead>
                <tr className=''>
                    <th className='py-3 px-10'>Name</th>
                    <th  className='py-3 px-10'>Email</th>
                    <th  className='py-3 px-10'>Password</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((item: any) => (
                    <tr className='odd:bg-[#66D9EF]'>
                        <td className='py-3 px-10'>{item.name}</td>
                        <td  className='py-3 px-10'>{item.email}</td>
                        <td  className='py-3 px-10'>{item.password}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
  )
}

export default Tabels