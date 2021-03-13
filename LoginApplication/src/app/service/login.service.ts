import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Login } from "../model/Login.model";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  /**
   * login user with set token in localstorage
   * @param token
   * @returns
   */
  loginUser(token) {
    localStorage.setItem("token", token);
    return true;
  }

  /**
   * to check is user log in or not with fetching token from localstorage
   * @returns
   */
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  /**
   * to logout user with removing token from localstorage
   * @returns
   */
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  /**
   * with passing login data fetch token from backend
   * @param loginData
   */
  fetchTokenFromAPI(loginData: Login): any {
    return this.http.post("http://localhost:8080/authenticate", loginData);
  }
}










// for (const key in responseData) {
//   if (responseData.hasOwnProperty(key)) {
//     token.push({ k: key });
//   }
// }
// return token;

// .subscribe((responseData:any) => {
//   console.log(responseData.jwt);
//   token=responseData.jwt;
// });
// return token;
