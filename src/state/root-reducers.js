import {combineReducers} from "redux";
import {navbarReducer} from "./navbar/reducer";
import {previewNftReducer} from "./preview/nft/reducer";
import {authReducer} from "./auth/reducer";
import {profileReducer} from "./profile/reducer";

export const rootReducers = combineReducers({
    profile: profileReducer,
    navbar: navbarReducer,
    previewNft: previewNftReducer,
    auth: authReducer
})