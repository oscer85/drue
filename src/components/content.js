import React from 'react';
import AboutSection from './about-section'
import CommercialSection from './commercial-section'
import HeaderSection from './header-section';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Content = (props) => {
    return (
        <Router>
            <div className="content">
                <HeaderSection />

                <Switch>
                    <Route path="/about" component={AboutSection} />
                    <Route path="/commercial" component={CommercialSection} />
                </Switch>
            </div>
        </Router>
    );
}

export default Content;