import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Statistics from '../../ui/statistics/Statistics'
import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.png'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>BEAST MODE ACTIVATED</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
