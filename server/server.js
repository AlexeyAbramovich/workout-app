import 'colors'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import authRoutes from './app/auth/auth.routes.js'
import exerciseRoutes from './app/exercise/exercise.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import userRoutes from './app/user/user.routes.js'
import workoutRoutes from './app/workout/workout.routes.js'

const app = express()

async function main() {
	const port = process.env.PORT || 5000
	const mode = process.env.NODE_ENV

	if (mode === 'development') app.use(morgan('dev'))

	app.use(cors())
	app.use(express.json())

	// делаем папку статичной, чтобы работать с картинками
	// __dirname - корневой путь
	const __dirname = path.resolve()
	app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)
	app.use('/api/exercises', exerciseRoutes)
	app.use('/api/workouts', workoutRoutes)

	app.use(notFound)
	app.use(errorHandler)

	app.listen(
		port,
		console.log(`🚀 Server running in ${mode} mode on port ${port}`.blue.bold)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
