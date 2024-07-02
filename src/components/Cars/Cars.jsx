import { CARS } from '../../data';
import styles from './Cars.module.css';

export default function Cars() {
	return (
		<ul className={styles.cars}>
			{CARS.map((car) => (
				<li
					key={car.id}
					className={`${styles.car} ${styles[`car--${car.id}`]}`}
				>
					<img src={car.icon} width={64} height={40} alt="" />
					<h2>{car.title}</h2>
					<p>{car.description}</p>
					<a href="#" className="btn btn--primary">
						Learn More
					</a>
				</li>
			))}
		</ul>
	);
}
