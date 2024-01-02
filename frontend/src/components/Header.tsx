import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
const lngOptions = [
    {
        val: "",
        lng: "select your language"
    },
    {
        lng: "en",
        val: "en"
    }, {
        lng: "hi",
        val: "hi"
    }
]
const Header = () => {
    const { i18n } = useTranslation();
    const [selectedLng, setSelectedLng] = useState<string>("");
    const handleLanguageChange = (val: any) => {
        // console.log(val.target.value)
        i18n.changeLanguage(val.target.value);
        document.documentElement.lang = val.target.value;
    }
    useEffect(() => {
        const currentLng = document.documentElement.lang; //for catch language
        setSelectedLng(currentLng);
    }, [])
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <select aria-label="Default select example" className='ms-2' onChange={handleLanguageChange}>
                            {
                                lngOptions.map(option => (
                                    <option value={option.val} selected={selectedLng == option.val} disabled={!option.val}>{option.lng}</option>
                                ))
                            }
                        </select>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;
