import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {UserDetails} from  './login-meta'
@Injectable({
    providedIn : 'root'
})
export class TestService {
    userDetails: UserDetails = new UserDetails();
 baseUrl = '../assets/';
    constructor(private http: HttpClient){

    }

getQestions():Observable<any> {
    let questionsUrl = this.baseUrl+'question.json'
    return this.http.get(questionsUrl);
}

    

}