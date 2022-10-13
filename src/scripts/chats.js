import getData from "../scripts/data.js"

const getChats= async(url,query)=>{
    
    const urlRecieved=`${url}?idUser2=${query}&idUser1?`
    const chatsRecieved= await getData(urlRecieved);
   
    const urlSend=`${url}?idUser1=${query}&idUser2?`
    const chatsSend = await getData(urlSend);
    const chats=[
        ...chatsRecieved,
        ...chatsSend
    ]


    return chats
}
export default getChats;