import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const API_URL = 'http://localhost:1702/api/v1/';
export const useAppDispatch = () => useDispatch()
export const useAppNavigate = () => useNavigate()