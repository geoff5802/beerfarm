const React = require('react');
const Header = require('../../components/Header');
const Classes = require('./styles.scss');
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;

// Pull global styles
require('../../styles/core.scss');

const CoreLayout = ({ children }) => (

    <MuiThemeProvider>
        <div className="container text-center">
            <Header />
            <div className={Classes.mainContainer}>
                {children}
            </div>
        </div>
    </ MuiThemeProvider>
);

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
};

module.exports = CoreLayout;
