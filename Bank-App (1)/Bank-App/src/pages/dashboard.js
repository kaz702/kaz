import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                            </ol>
                            {/* <div className="row">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                      
                                        <Link className="card-footer text-white clearfix small z-1" to={'#'}>
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                     <div className="App">
                    <table>
                         <tr>
                         <th>AMOUNT</th>
                          <th>DESCRIPTION</th>
                          <th>CARTEGORY</th>
                          <th>DATE</th>
                          <th></th>
                         </tr>
                          <tr>
                          <td>10000</td>
                          <td>Rent</td>
                         <td>Rent</td>
                         <td>21/04/2020</td>
                         <td><button>Edit</button></td>
                        </tr>
                        <tr>
                          <td>10000</td>
                          <td>Rent</td>
                         <td>Rent</td>
                         <td>21/04/2020</td>
                         <td><button>Edit</button></td>
                        </tr>
                        <tr>
                          <td>10000</td>
                          <td>Rent</td>
                         <td>Rent</td>
                         <td>21/04/2020</td>
                         <td><button>Edit</button></td>
                        </tr>
                     </table>
                    </div>

                           
                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2022</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}
