import React from 'react'
import MovieDb from '../assets/MovieDb.svg'
const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className=" d-flex flex-wrap justify-content-between text-white">
                                <div >
                                    {/* <img src={require("../assets/MovieDb.svg")} className="img-fluid" alt="movie"
                                    /> */}
                                    <img src={MovieDb} className='img-fluid' width="150px" height="30px" />

                                </div>
                                <div>
                                    <h5>THE BASICS</h5>
                                    <ul>
                                        <li><a href="/about">About TMDB</a></li>
                                        <li><a href="/about">Contact Us</a></li>
                                        <li><a href="/about">Support Forums</a></li>
                                        <li><a href="/about">API</a></li>
                                        <li><a href="/about">System Status</a></li>
                                    </ul>

                                </div>
                                <div >
                                    <h5>GET INVOLVED</h5>
                                    <ul>
                                        <li><a href="/about">About TMDB</a></li>
                                        <li><a href="/about">Contribution Bible</a></li>
                                        <li><a href="/about">Add New Movie</a></li>
                                        <li><a href="/about">Add New TV Show</a></li>

                                    </ul>

                                </div>
                                <div >
                                    <h5>COMMUNITY</h5>
                                    <ul>
                                        <li><a href="/about">COMMUNITY</a></li>
                                        <li><a href="/about">Guidelines</a></li>
                                        <li><a href="/about">Discussions</a></li>
                                        <li><a href="/about">Leaderboard</a></li>

                                    </ul>
                                </div>
                                <div >
                                    <h5>LEGAL</h5>
                                    <ul>
                                        <li><a href="/about">Terms of Use</a></li>
                                        <li><a href="/about">API Terms of Use</a></li>
                                        <li><a href="/about">Privacy Policy</a></li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer