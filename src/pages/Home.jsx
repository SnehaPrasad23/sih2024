import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Adddetails from '../components/Adddetails';

const linkStyle = {
    color: 'inherit'
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Home = () => {
    return (
        <Container>
            <Adddetails/>
            
        </Container>
    );
}

export default Home;
