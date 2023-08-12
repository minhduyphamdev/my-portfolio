import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: '2.6em', textAlign: 'left' }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							<ul>
								<li>
									Participated and qualified in about 10 programming contests
								</li>
								<li>
								Proficient in Java, JavaScript, and Ruby, I bring a versatile skill set to the table. 
								My expertise extends beyond programming languages to encompass a wide array of frameworks, allowing me to create robust and efficient solutions. 
								</li>
								<li>
								With a keen focus on performance and scalability, I have successfully worked with large databases, demonstrating my ability to handle complex data structures and optimize database interactions. 
								</li>
								<li>
									Being an inquisitive person, and I am proficient in functioning both autonomously and collaboratively within a team setting. Always looking forward to contributing my own
									value to the company
								</li>
								<li>
									I am the person who want to solve all problems on this world
									to help everyone can achieve their purpose . Also, I think I
									am a creative-thinking, problem-solving and curiosity person.
								</li>
								<li>
									Finally, I always try my best to achieve what I want, whether
									it is possible or not.
								</li>
							</ul>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://www.facebook.com/profile.php?id=100017838546798"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillFacebook />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://github.com/SuperDMWebDev"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://twitter.com/minhphamduyvn"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/minh-pham-13a31922a/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
