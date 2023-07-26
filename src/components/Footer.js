import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="6" className="footer-copywright">
					<h3>Designed and Developed by Minh Duy Pham</h3>
				</Col>
				<Col md="6" className="footer-copywright">
					<h3>Copyright © {year} Soumyajit Behera</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
