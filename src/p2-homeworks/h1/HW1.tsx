import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: "https://slovnet.ru/wp-content/uploads/2018/10/20-49.jpg",
    name: 'Joy',
    message: 'just do it...',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
