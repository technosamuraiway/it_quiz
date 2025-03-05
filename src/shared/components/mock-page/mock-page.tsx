import { useEffect, useState } from 'react'

import s from './mock-page.module.scss'

export const MockPage = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAPI()
  }, [])

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {data?.results?.map((item: any) => (
          <li key={item?.id} className={s.item}>
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
