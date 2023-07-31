import axios from "axios";
import React from 'react';

function useFetch(url) {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then(res => {
                setData(res)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    const refetch = () => {
        setLoading(true)
        axios
            .get(url)
            .then(res => {
                setData(res)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // console.log("from useFetch: ", data)
    return { data, url, loading, error, refetch }
}

export default useFetch