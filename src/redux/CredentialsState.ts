import { CredentialsModel } from "../models/CredentialsModel";


export class CredentialsState{
    public credentials?:CredentialsModel;
    
    public constructor(){
        const storedCredentials = (localStorage.getItem('credentials'));
        if(storedCredentials) {
            this.credentials =  JSON.parse(storedCredentials);
        } else {

        }
    }
}

export enum AuthActionType {

    setCredentials = "SetCredentials",
    removeCredentials = "RemoveCredentials"
}

export interface AuthAction {
    type: AuthActionType;
    payload?: any; 
}



export function setCredentialsAction(credentials: CredentialsModel): AuthAction {
    return { type: AuthActionType.setCredentials ,payload:credentials};
}

export function removeCredentialsAction(): AuthAction {
    return { type: AuthActionType.removeCredentials};
}

export function credentialsReducer(currentState: CredentialsState = new CredentialsState(),
                            action:AuthAction): CredentialsState{

    const newState = {...currentState} 
    switch(action.type){
        case AuthActionType.setCredentials:
            newState.credentials = action.payload;
            localStorage.setItem("credentials",JSON.stringify(newState.credentials));
            break;
        case AuthActionType.removeCredentials: 
            localStorage.removeItem("credentials");
            break;
            
    }
    return newState;
    
}