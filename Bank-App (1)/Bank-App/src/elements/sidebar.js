import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                        <Link to={'/dashboard'} className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>&nbsp;Dashboard</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/fileupload'} className="nav-link"><i className="fa fa-fw fa-coins"></i>
                            <span>&nbsp;My Income</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/index'} className="nav-link"><i className="fas fa-fw fa-money-bill-alt"></i>
                            <span>&nbsp;My Expenses</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/index'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                            <span>&nbsp;Expenses Summary</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/index'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                            <span>&nbsp;Income Summary</span></Link>
                    </li>
                  
                </ul>
            </div>
        );
    }
}
