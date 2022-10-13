import getChats from "./chats.js";
import getData from "./data.js";

const URLusers = 'http://localhost:3000/users'
const URLchats = 'http://localhost:3000/messages'

const form = document.getElementById("form_login");

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = form[0].value;
  const URLuser = `${URLusers}?phone=${query}`
  const userLogin = await getData(URLuser)
  const messages = await getChats(URLchats, query);
});

const containerChats1 = document.getElementById('container1');

const renderUsers = (chatsData) => {
  containerChats1.innerHTML = '';
    chatsData.forEach(user=>{
      containerChats1.innerHTML +=`
            
                <div class="main__users--conversations-1">
                    <span class="main_date">02/10/2022</span>
                    <nav>
                        <figure>
                            <img src=${user.image} alt="">
                        </figure>
                        <div class="chat">
                            <p class="chat__name">${item.name}</p>
                            <p class="chat__chat"> Hola Aleja, como estás?</p>
                        </div>
                    </nav>
                </div>

                <div class="aside__chats--recieved">
                <div class="container_recieved" >
                    <p>Hola Aleja, como esás?</p>
                    <span>12:30pm</span>
                </div>                 
            </div>

            <div class="aside__chats--send">
                <div class="container_send">
                    <p>Hola Olivia, estoy bien gracias, y tu?</p>
                    <span>12:52pm</span>
                </div>
            </div>
           
      `
  })
}