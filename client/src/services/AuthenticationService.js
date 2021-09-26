import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials) //ubicado en app.js del servidor Backend.
  }
}
