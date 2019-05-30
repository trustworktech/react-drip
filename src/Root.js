// src/Root.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';

const Root = () => <BrowserRouter>{routes}</BrowserRouter>;

export default Root;
