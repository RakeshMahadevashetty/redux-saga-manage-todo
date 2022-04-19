import * as ReactBootstrap from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return <>
        <ReactBootstrap.Navbar className='bg-secondary'sticky='top'>
            <ReactBootstrap.Container>
                <ReactBootstrap.NavbarBrand className='text-light h2'>
                    Redux - Saga App
                </ReactBootstrap.NavbarBrand>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        <Outlet />
    </>
}

export default Navigation;