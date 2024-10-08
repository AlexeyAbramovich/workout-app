import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { getWorkoutLog } from './log/get-workout-log.controller.js'
import { updateCompleteWorkoutLog } from './log/update-wokout-log.controller.js'
import { createNewWorkoutLog } from './log/workout-log.controller.js'
import {
	createNewWorkout,
	getWorkout,
	getWorkouts,
	removeWorkout,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout).get(protect, getWorkouts)
router
	.route('/:id')
	.get(protect, getWorkout)
	.put(protect, updateWorkout)
	.delete(protect, removeWorkout)

router
	.route('/log/:id')
	.get(protect, getWorkoutLog)
	.post(protect, createNewWorkoutLog)

router.route('/log/complete/:id').patch(protect, updateCompleteWorkoutLog)

export default router
