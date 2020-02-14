import axios from "axios"

export interface Post {
  id: string
  title: string
  content: string
}

const baseURL = "https://jsonplaceholder.typicode.com/"

const instance = axios.create({
  baseURL,
})

export const apiClient = {
  posts: {
    async getListing(): Promise<Post[]> {
      const {data} = await instance.get("posts")
      return data
    },
  },
}
