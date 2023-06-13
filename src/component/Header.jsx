import React, { useState } from 'react'
import TMD from '../assets/TMD.svg'
import { Link } from 'react-router-dom'

const Header = ({ Moviedata, Searchmovie, search, Seardata }) => {
    let arr = ["Movies", "TV Shows", "Kid", "More"]

    return (
        <>

            <nav class="navbar navbar-expand-lg navbar_wrap ">
                <div class="container-fluid ">
                    <Link class="navbar-brand ms-3" to="/">
                        <img src={TMD} className='img-fluid' width="100px" height="30px" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">

                        <ul class="navbar-nav  mb-2 mb-lg-0">

                            {
                                arr.map((value) => {
                                    return (
                                        <li class="nav-item">
                                            <Link class="nav-link " aria-current="page" to="#" name={value} onClick={(e) => Moviedata(e.target.name)}  >{value}</Link>
                                        </li>
                                    )
                                })
                            }

                            <li class="nav-item">
                                <input type="text" className='form-control' value={search} placeholder='search movies,kid etc...'
                                    onChange={Searchmovie} onKeyDown={Seardata} />
                            </li>

                        </ul>


                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header