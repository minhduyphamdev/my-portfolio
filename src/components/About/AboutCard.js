import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am an innovative developer with near 2 year
						experiences in building and maintaining responsive websites in the
						recruiting industry. Proficient in HTML, CSS, javascript and java,
						ruby with modern libraries and other frameworks. Passionate about
						usability and possess working knowledge of Adobe Photoshop.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Blogger at viblo
						</li>
						<li className="about-activity">
							<ImPointRight /> Writing Tech Blogs
						</li>
						<li className="about-activity">
							<ImPointRight /> Badminton
						</li>
						<li className="about-activity">
							<ImPointRight /> Reading book
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
