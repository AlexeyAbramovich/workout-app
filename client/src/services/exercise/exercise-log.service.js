import { $axios } from '../../api'
import { EXERCISES } from './exercise.service'

export const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	// name, times, iconPath
	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	// weight, repeat, isCompleted
	async updateTime(timeId, body) {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	}

	// isCompleted
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
