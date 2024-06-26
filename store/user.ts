import { defineStore } from 'pinia'
import Cookies from "universal-cookie";
import { loginUser, registerUser } from '~/tools/actions/user_actions';
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
            // if info is given, just update by given info
            if(info) {
                this.userInformation = {
                    ...this.userInformation,
                    ...info
                }
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
                    this.isLoggedIn = true;
                    // if has callback function passed, callback to let caller know update finished
                    callback && callback(true)
                })
            }
        },
        loginUser(username:string, email:string, password:string, keepLogin: boolean) {
            return new Promise(async resolve=>{
                const user = await loginUser(username, email, password, keepLogin);
                if(user) {
                    this.requestUpdateUserInfo(user, (status:boolean)=>{
                        status && resolve(true);
                    });
                }
            })
        },
        registerUser(username:string, email:string, password:string, keepLogin: boolean) {
            return new Promise(async resolve=>{
                const user = await registerUser(username, email, password, keepLogin);
                if(user) {
                    this.requestUpdateUserInfo(user, (status:boolean)=>{
                        status && resolve(true);
                    });
                }
            })
        },
        logoutUser() {
            this.isLoggedIn = false;
            this.userInformation = { id: null } as userInfo;
        }
    }
}) 

export default useUser;