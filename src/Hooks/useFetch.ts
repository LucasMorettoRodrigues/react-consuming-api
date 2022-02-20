import axios from 'axios'

import { useState, useEffect } from 'react'


export function useFetch<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [url])

    return { data, loading }
}