import React, { useState } from 'react';
import { Card ,Col, Row} from 'antd';
const { Meta } = Card;
const IntroCard = () => {
	const [times, setTimes] = useState(0);

	return (
		<Row gutter={16}>
		<Card
			hoverable
			style={{
					width: 240,
			}}
			cover={<img alt="pic" src="http://wmnlab.ee.ntu.edu.tw/lab/image/people/Cheng-Rui%20Jia.JPG" />}
		>
			<Meta title="賈承叡" description="國立台灣大學 電信所資網組" />
		</Card>
		<Col span={8}>
			<Card 
				title="Welcome To My Website!" 
				bordered={false}
				hoverable={true}
				style={{
					width: 300,
				}}
			>
        <p>嗨，我是台大的學生，目前就讀電信所</p>
				<p>這是我的期中專案</p>
      </Card>
			<p></p>
			<Card 
				title="Visits" 
				bordered={false}
				hoverable={true}
				style={{
					width: 300,
				}}
				onClick={()=>{setTimes(t=>t+1)}}
			>
			This Website has been visited {times} times!
			</Card>
		</Col>
	</Row>
	);
}; 

export default IntroCard;