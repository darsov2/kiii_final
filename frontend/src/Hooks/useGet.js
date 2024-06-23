import axios from "../axios";
import {useEffect, useState} from 'react';

const useGet = (url) => {

    console.log(url)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [refres, setRefresh] = useState(0);

    const getData = async (uurl) => {
        await axios.get(uurl).then((res) => {
            setData(res.data);
            // setRefresh(prev => ++prev)
        }).catch((err) => {
            console.warn(err)
        }).finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getData(url);
    }, [refres]);

    return {
        data,
        setData,
        isLoading,
        getData,
        setRefresh
    };
};


export default useGet;