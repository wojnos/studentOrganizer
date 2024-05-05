import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import UserInfo = firebase.UserInfo;


@Injectable({providedIn: "root"})

export class AuthService {
  private userId?: UserInfo | string;
  constructor(private fireAuth: AngularFireAuth) {
  }

  login(credentials: {email: string, password: string}) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userUID => this.userId = userUID.user?.uid)
  }

  //pobieranie unikalnego userUID z firebase
  get userLoggedId() {
    return this.userId;
  }
//sprawdza czy uzytkownik jest zalogowany
  isLoggedIn() {
    return !!this.userId;
  }

  register(credentials: {email: string, password: string}) {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
  }
  //metoda wylogowania
  logout() {
    return this.fireAuth.signOut();
  }

}
