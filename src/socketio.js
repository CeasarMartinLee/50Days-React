import io from 'socket.io-client'
import {API_URL } from './constants'
export default io(API_URL)