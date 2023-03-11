import Handlebars from 'handlebars';
import chat from 'bundle-text:./chat.hbs';
import {ChatItem} from '../../components/chat_item/chat_item';
import './chat.css'; 

export const Chat = (data)=> {
    data.chat_items = [];
    data.chatItems.forEach(element => {         
        data.chat_items.push(ChatItem(element));
    });
    return Handlebars.compile(chat)(data); 
}