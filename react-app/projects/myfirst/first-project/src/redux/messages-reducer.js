const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE_TEXT ='ADD_NEW_MESSAGE_TEXT';

let initialState = {
        //Массив диалогов
        dialogs: [
            {id: 1, name: 'Макс'},
            {id: 2, name: 'Саша'},
            {id: 3, name: 'Лера'},
            {id: 4, name: 'Инокентий'},
            {id: 5, name: 'Днепро'},
        ],
        //Массив сообщений
        messages: [],
        newMessageText: '',
        messageId: 1
}

const messagesReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_MESSAGE: {
            let copyState = {...state};
            copyState.messages = [...state.messages]
            let message = {
                id: copyState.messageId,
                message: copyState.newMessageText
            }
            copyState.messages.push(message);
            //Прибавляем значение id сообщения
            copyState.messageId++;
            //Очищаем textarea
            copyState.newMessageText = '';
            return copyState;
        }
        case ADD_NEW_MESSAGE_TEXT:{
            let copyState = {...state}
            copyState.newMessageText = action.value;
            return copyState;
        }

        default:
            return state;
    }
}

export const addMessageCreator = () =>{
    return {type: ADD_MESSAGE}
}
export const messageChangeCreator = (text) =>{
    return({
        type: ADD_NEW_MESSAGE_TEXT,
        value: text
    })
}
export default messagesReducer;