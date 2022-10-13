

const URL = 'http://localhost:3000/'

class UI {
    constructor(targetID) {
        this.target = document.getElementById(targetID);
    }

    getValue() {
        return this.target.value;
    }
}

const phone = new UI('phone');
const password = new UI('password');

const form = document.getElementById('form__login');

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
        phone: phone.getValue(),
        password: password.getValue(),
    }
    
    for (const key in user) {
        const element = user[key];
        if (element === '') {
            alert(`Llena los campos: ${key}`)
            return;
        }
    }
   
    try {
        let response = await axios.get(`${URL}users?phone=${user.phone}&password=${user.password}`);
        if (response.status === 200) {
            if (response.data.length) {
                
                localStorage.setItem('user', JSON.stringify(response.data[0]))

                location.href = 'http://127.0.0.1:5502/pages/home.html'

            }else {
                Swal.fire(
                    'Error',
                    'Usuario o contraseña incorrecta',
                    'error'
                )
            }
            console.log(response);
        }

    } catch (error) {
        console.log(error);
        Swal.fire(
            'Oops!',
            'Se ha presentado un error!',
            'error'
        )
    }
}

const validSession = () => {
    const user = localStorage.getItem('user');
    if (user) {
        location.href = 'http://127.0.0.1:5502/pages/home.html'
    }
}

validSession()

form.addEventListener('submit', (e) => { handleSubmit(e) })