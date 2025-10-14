// src/api/Api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost/MyTask/backend/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const loginUser = async(email, password) => {
    const res = await api.post('/auth/login.php', {
      email: email.value,
      password: password.value,
    })
    return res;
}

const getUserInfo = async () => {
  const res = await api.get('/user/get_user_info.php')
  return res;
}

// --- Task APIs ---
const getTasks = async (userId) => {
  const res = await api.get(`/get_tasks.php?user_id=${userId}`)
  return res;
}

const deleteTask = async (id) => {
  const res = await api.get(`/delete_task.php?id=${id}`)
  return res;
}

const updateTask = async (data) => {
  const res = await api.patch('/update_task.php', data)
  return res;
}

export default {
  getTasks,
  deleteTask,
  updateTask,
  loginUser,
  getUserInfo
}
