export const DOMAIN = 'http://localhost:1702/api/v1/';

export const API = {
      // --------------- AUTHENTICATION ---------------
      LOGIN: DOMAIN + "users/login",
      REGISTER: DOMAIN + "users/register",
    
      // --------------- USER ---------------
      GET_ALL_USER: DOMAIN + "users/all",
      GET_USER: DOMAIN + "users/details",
      UPDATE_USER: DOMAIN + "users/update",
      CHANGE_PASSWORD: DOMAIN + "users/changePassword",
      FORGOT_PASSWORD: DOMAIN + "users/sendMailChangePassword",
      CHANGE_AVATAR: DOMAIN + "users/avatar",
      GET_AVATAR: DOMAIN + "users/images",
      // DELETE_USER: DOMAIN + "user"
    
      // // --------------- ARTICLE ---------------
      POST_ARTICLE: DOMAIN + "articles",
      SEND_NOTIFICATION: DOMAIN + "articles/sendMail",
      GET_ARTICLE: DOMAIN + "articles/all",
      NO_PAGING: DOMAIN + "articles/noPaging",
      GET_ARTICLE_IMAGE: DOMAIN + "articles/images",
      DELETE_IMAGE: DOMAIN + "articles/image",
      DOWNLOAD_FILE: DOMAIN + "articles/downloads",
      READ_FILE: DOMAIN + "articles/views",
      GET_ARTICLE_BY_ID: DOMAIN + "articles",
      CHANGE_ARTICLE_STATUS: DOMAIN + "articles",
      DOWNLOAD_ZIP_FOLDER: DOMAIN + "users/downloads/all",
      UPDATE_ARTICLE: DOMAIN + "articles",
      DELETE_ARTICLE: DOMAIN + "articles",
    
      // ----------------- CLOSURES -----------------
      POST_CLOSURE: DOMAIN + "closures",
      GET_ALL_CLOSURES: DOMAIN + "closures",
      GET_CLOSURES_BY_ACADEMIC_YEAR: DOMAIN + "closures/academic",
      DELETE_CLOSURE: DOMAIN + "closures",
      UPDATE_CLOSURE: DOMAIN + "closures",
    
      // ----------------- ACADEMIC YEAR -----------------
      GET_ALL_ACADEMIC_YEARS: DOMAIN + "academic_years",
      CREATE_NEW_ACADEMIC_YEAR: DOMAIN + "academic_years",
      UPDATE_ACADEMIC_YEAR: DOMAIN + "academic_years",
    
      // // --------------- COMMENT ---------------
      POST_COMMENT: DOMAIN + "comments",
      GET_COMMENT: DOMAIN + "comments",
      DELETE_COMMENT: DOMAIN + "comments",
    
      // --------------- LIKE ---------------
    
      // --------------- FOLLOW ---------------
    
      // --------------- NOTIFICATION ---------------
    };
    
    export const LOCAL_STORAGE = {
      TOKEN: "token",
      USER: "user_remember",
    };
    
    export const ROLE = {
      DIRECTOR: 1,
      MANAGER: 2,
      SALE: 1
    };
    
    export const STATUS_CODE = {
      SUCCESS: 200,
      CREATED: 201,
      NO_CONTENT: 204,
      ERROR: 500,
      NOT_FOUND: 404,
      UNAUTHORIZED: 401,
      BAD_REQUEST: 400,
      FORBIDDEN: 403,
    };