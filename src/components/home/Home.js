import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import {Container, Button, Typography} from '@material-ui/core';


function Home() {
    return (
        <div className='Home'>
            <header>
                <Container maxWidth='lg'>
                    <Typography variant='h5' component='span' id='logo'>
                        GeThiDo
                    </Typography>
                    <nav>
                        <Link to='/users/register'>
                            <Button color='primary'>Register</Button>
                        </Link>
                        <Link to='/users/login'>
                            <Button variant='contained' color='primary'>Login</Button>
                        </Link>
                    </nav>
                </Container>
            </header>
            <main>
                <Container maxWidth='lg'>
                    <section id='section1'>
                        <Typography variant='h1'>
                            GeThiDo
                        </Typography>
                        <Typography variant='h4' component='span'>
                            Time management tool <br/>
                            based on <cite>Getting Thing Done</cite> method.
                        </Typography>
                    </section>
                    <section id='section2'>
                        <Typography variant='h3' component='h2'>
                            About
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            GeThiDo is a web application time management tool based on <cite>Getting Things Done</cite> method by David Allen.<br/>
                            It enables you to easily collect and manage your tasks.
                        </Typography>
                    </section>
                </Container>
            </main>
            <footer>
                <Container maxWidth='lg'>
                    <Typography variant='subtitle1'>
                        Made by <a href='https://marchewczyk.eu'>Michał Marchewczyk</a>
                    </Typography>
                    <Typography variant='subtitle1'>
                        Open source: <a href='http://github.com/michalmarchewczyk/gethido-react'>GitHub</a>
                    </Typography>
                </Container>
            </footer>
        </div>
    );
}

export default Home;
