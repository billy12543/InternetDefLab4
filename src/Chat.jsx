import React, { useState } from 'react';
import { Avatar, List, Divider, Input, Space, Button, ConfigProvider } from 'antd';
const { TextArea } = Input;
let data = new Array()
const Chat = () => {
	const [value, setValue] = useState('');
	const [name, setName] = useState("Anonymous");
	const handleOnClick = () => {
		data.push({
			name: name,
			msg: value,
			avater: parseInt(Math.random()*1000),
		})
		setValue("")
		console.log(data)
	}
	return (
	<>
	<ConfigProvider theme={{
		token: {
			colorTextDescription: '#505050',
		}
	}}>
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item, index) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.avater}`} />}
						title={item.name}
						description={item.msg}
					>
					</List.Item.Meta>
					
				</List.Item>
			)}
  	/>
	</ConfigProvider>
		<Divider orientation="left" plain>Enter Message and Name...</Divider>
		<Space direction="vertical" style={{width:'100%'}}>
		<Space.Compact style={{width:'100%'}}>
			<TextArea
				placeholder="Messages"
				autoSize={{
					minRows: 2,
					maxRows: 6,
				}}
				onChange={(e)=>{setValue(v=>v=e.target.value)}}
				value={value}
			/>
		</Space.Compact>
		<Space.Compact style={{width:'100%'}}>
			<Input 
				placeholder="Enter Your Name" 
				defaultValue="Anonymous" 
				onChange={(e)=>{setName(n=>n=e.target.value)}}
				value={name}
			/>
			<Button type="primary" onClick={handleOnClick}>Submit</Button>
		</Space.Compact>
		</Space>
		
	</>
	
	);
}
export default Chat;