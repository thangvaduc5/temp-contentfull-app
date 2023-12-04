import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: 'ufaknbhetyh7',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProject = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })

      const result = response.items.map((item) => {
        const { image, title, url } = item.fields
        const img = image?.fields?.file?.url
        const id = item.sys.id
        return { id, img, title, url }
      })
      setIsLoading(false)
      setProjects(result)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { isLoading, projects }
}
