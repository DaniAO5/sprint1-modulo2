const URL = 'http://localhost:3000/'


class UI {
    constructor(targetID) {
        this.target = document.getElementById(targetID);
    }
    
    getValue() {
        return this.target.value;
    }
}

const name = new UI('name');
const phone = new UI('phone');
const password = new UI('password');
const image = new UI('image');

const form= document.getElementById('form__login');
const register = document.getElementById('btnRegister');


const handleSubmit = async (e) => {
    e.preventDefault();
   
    const newUsers = {
        name: name.getValue(),
        phone: phone.getValue(),
        password: password.getValue(),
        image: image.getValue(),
    }

    for (const key in newUsers) {
        const userNew = newUsers[key];
        if (userNew === '') {
            Swal.fire(
                'Espera',
                'Completa todos los campos',
                'warning'
              )
            console.log(newUsers);
          
        }
    }
  
    try {
        let response = await axios.post(`${URL}users`, newUsers);
        if (response.status === 201) {
            localStorage.setItem('newUser', JSON.stringify(response.data[0]));
            Swal.fire(
                'Felicitaciones!',
                ' Ya estás registrado!',
                'success'
            )
        }
    } catch (error) {
        Swal.fire(
            'Error!',
            'Se ha presentado un error!',
            'error'
        )
    }
}



register.addEventListener('submit', (e) => { handleSubmit(e) });