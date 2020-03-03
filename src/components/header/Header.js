import React from 'react';
import "./Header.css"
import { Navbar, NavbarText} from 'reactstrap';

export default function Header() {
    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarText>หัว-ก้อย</NavbarText>
            </Navbar>
        </div>
    )
}
