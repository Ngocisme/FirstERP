import { API } from "../../utils/constanst/constanst";
import {BaseService} from './BaseService'

class UserService extends BaseService {
      login = (data) => {
        return this.post(`${API.LOGIN}`, data);
      };
    
      register = (data) => {
        return this.post(`${API.REGISTER}`, data);
      };
    
      getAllUser = () => {
        return this.get(`${API.GET_ALL_USER}`);
      };
    
      getUserDetail = () => {
        return this.post(`${API.GET_USER}`);
      };
    
      updateUser = (data) => {
        return this.put(`${API.UPDATE_USER}/${data.id}`, data);
      };
    
      forgotPassword = (data) => {
        return this.post(`${API.FORGOT_PASSWORD}`, data);
      };
    
      changePassword = (data) => {
        return this.put(`${API.CHANGE_PASSWORD}/${data.id}`, data);
      };
    
      changeAvatar = (data) => {
        return this.post(`${API.CHANGE_AVATAR}/${data.id}`, data.avatar);
      };
    }
    
    export const userService = new UserService();