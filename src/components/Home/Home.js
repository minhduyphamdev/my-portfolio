import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatarNew from '../../Assets/avatar_new.jpg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hi everyone!{' '}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name"> Minh Pham</strong>
							</h1>

							<div
								className="about-me"
								style={{ padding: 50, textAlign: 'left' }}
							>
								<h1>Backend / Fullstack ( Java, Javascript, Ruby, Python)</h1>
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={avatarNew}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: '450px' }}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
