import {combineReducers} from "redux";
import {profileReducer} from "./profile/reducer";
import {navbarReducer} from "./navbar/reducer";
import {previewNftReducer} from "./preview/nft/reducer";
import {authReducer} from "./auth/reducer";

export const rootReducers = combineReducers({
    profile: profileReducer,
    navbar: navbarReducer,
    preview: previewNftReducer,
    auth: authReducer
})