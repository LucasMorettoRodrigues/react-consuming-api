import React from 'react';
// import axios from 'axios'
// import { useState, useEffect } from 'react'
import { useFetch } from './Hooks/useFetch';

function App() {
  type Repository = {
    full_name: string,
    description: string
  }

  // const [repositories, setRepositories] = useState<Repository[]>([])
  // const [loading, setLoading] = useState<boolean>(true)

  // ---- USANDO FECTCH ---- //
  // useEffect(() => {
  //   setLoading(true)
  //   fetch("https://api.github.com/users/lucasmorettorodrigues/repos")
  //     .then(response => response.json())
  //     .then(data => {
  //       setRepositories(data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => setLoading(false))
  // }, [])

  // ---- USANDO FECTCH COM ASYNC AWAIT ---- //
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch("https://api.github.com/users/lucasmorettorodrigues/repos")
  //       const data = await response.json()
  //       setRepositories(data)
  //     } catch (err) {
  //       console.log(err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   })()
  // })

  // ---- USANDO AXIOS ---- //
  // useEffect(() => {
  //   setLoading(true)
  //   axios.get("https://api.github.com/users/lucasmorettorodrigues/repos")
  //     .then(response => setRepositories(response.data))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  // }, [])

  // --- USANDO HOOK ---- //
  const { data: repositories, loading } = useFetch<Repository[]>("https://api.github.com/users/lucasmorettorodrigues/repos")

  return (
    <ul>
      {loading && <p>Carregando...</p>}
      {
        repositories?.map(repo => (
          <li key={repo.full_name} >
            <strong>{repo.full_name} </strong>
            <p> {repo.description} </p>
          </li>
        ))
      }
    </ul>
  );
}

export default App;
