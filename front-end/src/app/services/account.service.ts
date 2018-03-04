import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";

@Injectable()
export class AccountService {
  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(AuthService.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }
}
