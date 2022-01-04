import {combineReducers} from "redux";
import {navbarReducer} from "./navbar/reducer";
import {previewNftReducer} from "./preview/nft/reducer";
import {authReducer} from "./auth/reducer";
import {profileReducer} from "./profile/reducer";
import {exploreNftReducer} from "./explore/nft/reducer";

export const rootReducers = combineReducers({
    profile: profileReducer,
    navbar: navbarReducer,
    previewNft: previewNftReducer,
    exploreNft: exploreNftReducer,
    auth: authReducer
})