import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import {
	createNewExercise,
	getExercises,
	removeExercise,
	updateExercise
} from './exercise.controller.js'
import { createNewExerciseLog } from './log/exercise-log.controller.js'
import { getExerciseLog } from './log/get-exercise-log.controller.js'
import {
	completeExerciseLog,
	updateExerciseLogTime
} from './log/update-exercise-log.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)
router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, removeExercise)

router
	.route('/log/:id')
	.get(protect, getExerciseLog)
	.post(protect, createNewExerciseLog)

router.route('/log/time/:id').put(protect, updateExerciseLogTime)

router.route('/log/complete/:id').patch(protect, completeExerciseLog)

export default router
