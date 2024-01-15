import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cognitoOverview from '../../Assets/cognito_overview.png';
function Sharing() {
	return (
		<Container fluid className="about-section">
			<Container>
				<Row style={{ justifyContent: 'center', textAlign: 'left', padding: '10px' }}>
							AWS - Authentication with Amazon Cognito
							<br />
							<img
								src={cognitoOverview}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: 'auto' }}
							/>							
						AWS Cognito là một dịch vụ của AWS mà được sử dụng cho việc chứng thực (authentication) user. Sử dụng nó sẽ giúp ta trong việc xây dựng luồng sign-in, sign-up, verify email, change password, restart password, v...v... một cách dễ dàng hơn, thay vì ta phải tự xây dựng DB cho user và tự làm nhiều thứ như JWT, hash password, send mail verify, v...v...

						<br/>
							Dưới đây là một số tính năng quan trọng của AWS Cognito:
							<br/>

							Xác thực Người Dùng:
							Sử dụng cho SSO (single sign-on) . Ví dụ xây dựng hệ thống SSO, quản lý user ở 1 chỗ, sau khi đăng nhập hệ thống này, token được sử dụng cho nhiều dịch vụ khác nhau.
							<br/>

							Quản lý Người Dùng và Nhóm:
							Cognito cho phép tạo và quản lý người dùng, từ đó quản lý các nhóm truy cập dễ dàng hơn .
							<br/>

							Đồng bộ Hóa Dữ Liệu Người Dùng:
							Đồng bộ dữ liệu người dùng trên nhiều thiết bị, nhiều nền tảng khác nhau (mobile, web, ...)
							<br/>

							Quản lý Tài Nguyên (Resource Server) và Quyền Truy Cập:
							AWS Cognito cho phép quản lý tài nguyên và quyền truy cập, giúp kiểm soát đối với các nguồn tài nguyên khác nhau trong ứng dụng.
							<br/>

							Tích hợp Dễ Dàng:
							Tích hợp nhiều dịch vụ như AWS Lambda,Amazon S3, Amazon DynamoDB, giúp ứng dụng đa dạng và phong phú hơn..
							<br/>

							AWS Cognito cung cấp một nền tảng tập trung vào giúp xây dựng ứng dụng có tính bảo mật cao. Gồm 2 thành phần chính user pool và identity pool.
							User pool thì giống như là một DB chứa user của chúng ta, ta sẽ thực hiện việc sign-up, sign-in với user pool này và nó sẽ trả cho ta một token, ở bài này ta sẽ sử dụng user pool.
						Identity pool thì cũng giống với user pool là đều dùng để chứa user, nhưng có một điểm khác biệt là token được trả về từ identity pool có được dùng để truy cập vào các dịch vụ khác của AWS
							<br/>
				</Row>
			</Container>
		</Container>
		
	);
}

export default Sharing;
