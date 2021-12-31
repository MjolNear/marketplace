import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
}

export const NavbarContainer = connect(mapStateToProps, null)(Navbar)