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
                        <Typography variant='body1'>
                            GeThiDo is a web application time management tool based on <cite>Getting Things Done</cite> method by David Allen.<br/>
                            It enables you to easily collect and manage your tasks.
                        </Typography>
                        <Typography variant='h4' component='h3'>
                            How it works
                        </Typography>
                        <Typography variant='body1'>
                            Working with Getting Things Done method requires few steps:
                            <ol>
                                <li>
                                    Every task, message, email is collected in the Inbox
                                </li>
                                <li>
                                    You move every item from inbox to another category:
                                        <ul>
                                            <li>If it's not actionable (doesn't require any action): delete it (Trash), incubate it for later (Someday) or save it in Reference</li>
                                            <li>If it's actionable, but require multiple steps, then move it to Projects</li>
                                            <li>If it's an action somebody else has to do, or can be delegate, move it to Waiting</li>
                                            <li>If it's an action for specific day, move it to Calendar, and set this tasks date</li>
                                            <li>If it's an action that should be done as soon as possible, move it to Next</li>
                                        </ul>
                                </li>
                                <li>
                                    If there any new projects, you should review them for actions
                                </li>
                                <li>
                                    After you complete action, move it to Completed (or set GeThiDo to do it automatically)
                                </li>
                            </ol>
                        </Typography>
                        <Typography variant='h4' component='h3'>
                            Getting started
                        </Typography>
                        <Typography variant='body1'>
                            GeThiDo makes it easy to start with Getting Things Done method immediately.
                            <ol>
                                <li>Sign up with your email</li>
                                <li>Login with your username</li>
                                <li>Start working</li>
                            </ol>
                        </Typography>
                        <Typography variant='h4' component='h3'>
                            Setting up email collection
                        </Typography>
                        <Typography variant='body1'>
                            GeThiDo enables you to collect emails using custom generated email addresses.
                            <br/>
                            To setup email collection:
                            <ol>
                                <li>Go to settings</li>
                                <li>Generate new email address</li>
                                <li>Configure your email client to automatically redirect emails to this address (or just forward manually emails you want to process)</li>
                            </ol>
                            <b>Remember, GeThiDo is not an email client, and you should not depend on it storing your emails</b>
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
