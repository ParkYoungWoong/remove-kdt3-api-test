import axios from 'axios'

// USER A
const userALoginBtn = document.querySelector('.user-a .login')
const userALogoutBtn = document.querySelector('.user-a .logout')
userALoginBtn.addEventListener('click', () => login(userA))
userALogoutBtn.addEventListener('click', () => logout(userA))

// USER B
const userBLoginBtn = document.querySelector('.user-b .login')
const userBLogoutBtn = document.querySelector('.user-b .logout')
userBLoginBtn.addEventListener('click', () => login(userB))
userBLogoutBtn.addEventListener('click', () => logout(userB))

// Auth test!
const testBtn = document.querySelector('.test')
testBtn.addEventListener('click', test)

const userA = {
  email: 'admin@test.com',
  password: '123123123'
}
const userB = {
  email: 'admin3@test.com',
  password: '123123123'
}

async function login(user) {
  const formData = new FormData()
  formData.append('email', user.email)
  formData.append('password', user.password)

  const res = await axios({
    url: 'https://field-passer.store/api/auth/login',
    method: 'POST',
    data: formData,
    withCredentials: true
  })
  console.log(`${user.email} Log In!`, res)
}
async function logout(user) {
  const formData = new FormData()
  formData.append('email', user.email)

  const res = await axios({
    url: 'https://field-passer.store/api/auth/logout',
    method: 'POST',
    data: formData,
    withCredentials: true
  })
  console.log(`${user.email} Log Out!`, res)
}
async function test() {
  const { data } = await axios({
    url: 'https://field-passer.store/api/:memberid',
    method: 'GET',
    withCredentials: true
  })
  console.log('test::', data.data)
}

// axios({
//   url: 'https://field-passer.store/admin/auth/login',
//   method: 'POST',
//   data,
//   withCredentials: true
// })
// .then(res => {
//   console.log(res)
// })

// axios.post(
//   'https://field-passer.store/api/auth/login', 
//   formData, 
//   { withCredentials: true }
// ).then(response => { 
//   console.log(response); 
//   console.log(response.data); 
// })

// axios({
//   url: 'https://field-passer.store/api/auth/login',
//   method: 'POST',
//   data: formData,
//   withCredentials: true,
//   headers: {
//     'Access-Control-Allow-Origin': 'https://field-passer.store'
//   }
// })
// .then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://localhost:3000',
//   method: 'POST',
//   withCredentials: true
// })
// .then(res => console.log(res))

// fetch('https://field-passer.store/admin/auth/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data),
//   credentials: 'include'
// })
// .then(res => res.json())
// .then(res => console.log(res))

// fetch('https://field-passer.store/api/auth/login', {
//   method: 'POST',
//   body: formData,
//   credentials: 'include'
// })
// .then(res => res.json())
// .then(res => console.log(res))

// fetch('http://localhost:3000', {
//   method: 'POST',
//   credentials: 'include'
// })
// .then(res => res.json())
// .then(res => console.log(res))

// axios.defaults.withCredentials = true
// const request = axios.create({
//   withCredentials: true
// })
// request.post('https://field-passer.store/api/auth/login', {
//   data
// })
// .then(res => console.log(res))

// fetch('https://field-passer.store/api/category')
// .then(res => res.json())
// .then(res => console.log(res))