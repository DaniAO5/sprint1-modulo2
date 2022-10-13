import { getData }from '../scripts/data.js'

const imgPerfil = document.getElementById("header_nav");
const imgOtheruser = document.getElementById("header__nav2");
const nameOther = document.getElementById("header__nav2--name");
const containerChatsizq = document.getElementById("main__users");
const containerChats= document.getElementById('header');


  export const printChats = (listChats) => {
    console.log(listChats);
      containerChats.innerHTML = "";
        listChats.forEach((user, message) => {
          containerChats.innerHTML += `
            <div class="header__nav1">
              <figure id="imgMe">
                <img src="../img/images/user1.png" alt="" id="imgMe">
              </figure>
            </div>
            <div class="header__nav2">
              <figure id="imgOther">
              <img src="../img/images/user3.png" alt="" >
              </figure>
              <span class="header__nav2--name" id="header__nav2--name">
              <h4>Olivia Mar</h4>
              <p>EN LÍNEA</p>
              </span>
            </div>
  
          </header>

<main class="main">
  <section class="main__users" id="main__users">
      <div class="main__users--search">
          <nav>
              <img src="../img/icons/search.svg" alt="">
              <input type="text" id="input_chats" placeholder="Buscar o iniciar un nuevo chat">
          </nav>
      </div>

     <section class="main__users--conversations">
          <div class="main__users--conversations-1">
              <span class="main_date">02/10/2022</span>
              <nav>
                  <figure>
                      <img src="../img/images/user2.png" alt="">
                  </figure>
                  <div class="chat">
                      <p class="chat__name">Fernando</p>
                      <p class="chat__chat"> Hola Aleja, como estás?</p>
                  </div>
              </nav>
          </div>
      </section>
  </section>

  <article class="aside">
      <section class="aside__chats">
          
          <div class="aside__chats--recieved">
              <div class="container_recieved" >
                  <p>messages</p>
                  <span>12:30pm</span>
              </div>
              
          </div>
          
          
          <div class="aside__chats--send">
              <div class="container_send">
                  <p>messages2</p>
                  <span>12:52pm</span>
              </div>
          </div>
      </section>
      <nav class="chats">
          <figure>
              <img src="../img/icons/smile.svg" alt="">
              <img src="../img/icons/paperclip.svg" alt="">
          </figure>
          <input type="text" id="input_messages" placeholder="    Escribe un mensaje...">
          <figure>
              <img src="../img/icons/send.svg" alt="">
              <img src="../img/icons/mic.svg" alt="">
          </figure>
      </nav>
  </article>
</main>`
  });
};

