

// import { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => {
    const axiosPublic = UseAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loding, setLoding] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoding(false)
    //         })
    // }, [])

    const {data: menu = [], isPending: loding, refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })
    return [menu, loding, refetch]
};

export default UseMenu;