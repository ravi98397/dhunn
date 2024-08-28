import axios from "axios";
import { type } from "os";
import { useState } from "react";
import { useEffect } from "react";

export default function useAlbumLoad(dispatch, pageno) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [hasMore, setHasMore] = useState(false);  

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: `http://localhost:8080/api/v1/album/getAll`,
            params: {pageno: pageno },
            cancleToken: new axios.CancelToken(c => cancel = c) 
        }).then(res => {
            console.log("resulttttttttttttttttttttt= ", res, pageno)
            dispatch({
                type: "ADDALBUMPAGE",
                payload: {
                    data: res.data,
                    currentpage: pageno,
                    hasMore: res.data.length > 0
                }
            })
            /*
            setAlbums(prevAlbums => {
                return [...new Set([...prevAlbums, ...res.data])]
            })*/
            setHasMore(res.data.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel();
    },[pageno])
    return {loading, error, albums, hasMore};
}
