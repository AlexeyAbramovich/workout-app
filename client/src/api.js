import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constants.js'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

const axiosOptions = {
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' }
}

export const $axios = axios.create(axiosOptions)

$axios.interceptors.request.use((config) => {
	const accessToken = Cookies.get(TOKEN)

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})
