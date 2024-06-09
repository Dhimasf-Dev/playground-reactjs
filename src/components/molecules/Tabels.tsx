// import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Tabels = () => {
    // const [data, setData] = useState([])

    // const getData = async () => {
    //     const res = await axios.get('http://localhost:3000/dataUser')
    //     setData(res.data)
    //     console.log(res.data)
    // }

    // useEffect(() => {
    //     getData()
    // },[])

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
            <tr className='odd:bg-[#66D9EF]'>
                <td className='py-3 px-10'>John Doedasdasda dasdasdas</td>
                <td  className='py-3 px-10'>30asdasda sdsa</td>
                <td  className='py-3 px-10'>New Yorkasdsa dasdsadas</td>
            </tr> 
            </tbody>
        </table>
  )
}

export default Tabels