import { defineStore } from 'pinia'
import Cookies from "universal-cookie";
import request from '~/tools/request';

type userInfo = {
    'id': number | null,
    "token": string
    "username": string,
    "email": string,
    "isVerified": boolean,
    "isActive": boolean,
    "isLoggedIn": boolean,
    "createdAt": Date,
    "updatedAt": Date
}

const useUser = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        userInformation: { id: null } as userInfo
    }),
    actions: {
        requestUpdateUserInfo(info?:object, callback?:Function) {
            const setLogin = () => {
                new Cookies(null).set('current-user', `${this.userInformation.id}`)
                this.isLoggedIn = true;
                callback && callback(true);
            }
            // if info is given, just update by given info
            if(info) {
                this.userInformation = {
                    ...this.userInformation,
                    ...info
                }
                setLogin();
            } else {
                // if user id is not set
                if(this.userInformation.id === null) {
                    const currentUser = new Cookies(null).get('current-user')
                    // if current user is in cookies - means we logged in but somehow lost info, e.g. refreshed page
                    if(currentUser) {
                        this.userInformation.id = JSON.parse(currentUser).id
                    }
                    // callback false status and return
                    else {
                        callback && callback(false);
                        return;
                    }
                }
                // if info not given, query by user id
                request(`/accounts/${this.userInformation.id}`)
                .then(account => {
                    const {id, authorizedAccount} = account;
                    this.userInformation = {
                        ...this.userInformation,
                        id, ...authorizedAccount
                    }
                    setLogin();
                })
            }
        },
        loginOrRegister(reqType:'signin'|'signup',username:string, password:string, keepLogin: boolean, email?:string) {
            return new Promise(async resolve => {
                if(reqType === 'signup' && !email) {
                    resolve(false);
                    return;
                }

                // request for login or register
                const { id, authorizedAccount, detail } = await request(`/auth/${reqType}`, {
                    method: 'POST',
                    body: (
                        reqType === 'signin' ? 
                        { username, password } : { username, email, password }
                    )
                })

                // if there's any error, log error message to console
                if(detail) {
                    for(const { msg } of detail) console.error(msg);
                    resolve(false);
                    return;
                }
                // if successfully logged in
                else {
                    if(keepLogin) {
                        localStorage.setItem('user-login-info', JSON.stringify({username, password}))
                    }
                    this.requestUpdateUserInfo({ id, ...authorizedAccount }, resolve)
                    return;
                }
            })
        },
        loginUser(username:string, password:string, keepLogin: boolean) {
            return this.loginOrRegister('signin', username, password, keepLogin);
        },
        registerUser(username:string, email:string, password:string, keepLogin: boolean) {
            return this.loginOrRegister('signup', username, password, keepLogin, email);
        },
        logoutUser() {
            this.isLoggedIn = false;
            this.userInformation = { id: null } as userInfo;
        }
    }
}) 

export default useUser;