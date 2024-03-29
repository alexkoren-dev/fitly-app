import axios from "axios"
import config from "constants/config"

const api = axios.create({
  baseURL: config.API_ROOT_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response)
)

export default api
