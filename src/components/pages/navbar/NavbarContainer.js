import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
    navbar: state.navbar
})

export const NavbarContainer = connect(mapStateToProps)(Navbar)