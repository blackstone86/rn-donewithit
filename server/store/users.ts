const users = [
  {
    id: 1,
    name: 'Jim',
    email: 'jimvinhuang@gmail.com',
    password: '12345678'
  },
  {
    id: 2,
    name: 'John',
    email: 'john@domain.com',
    password: '12345678'
  }
]

const getUsers = () => users

const getUserById = (id) => users.find((user) => user.id === id)

const getUserByEmail = (email) => users.find((user) => user.email === email)

const addUser = (user) => {
  user.id = users.length + 1
  users.push(user)
}

export default {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser
}
