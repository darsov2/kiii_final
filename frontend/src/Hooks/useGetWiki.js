import axiosWiki from "../axiosWiki";
import {useEffect, useState} from 'react';

const useGet = (onlyIntroduction, textHtml, charsLimit, name) => {
    const bla = axiosWiki(onlyIntroduction, textHtml, name)
    console.log(bla.getUri())

    //console.log(url)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        console.log("Get DATA")
        await bla.get('https://en.wikipedia.org/w/api.php').then((res) => {
            console.log(res)
            setData(res.data);
        }).catch((err) => {
            console.warn(err)
        }).finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        setData,
        isLoading,
        getData
    };
};


export default useGet;