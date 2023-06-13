import React from 'react'
import { Link } from 'react-router-dom'

let img_path = "https://image.tmdb.org/t/p/w500"

const Movie = ({ Movie }) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="d-flex flex-wrap justify-content-center">
                            {
                                Movie.map((movie, index) => {
                                   
                                    return (
                                        <div class="card ms-4 mb-3" style={{ "width": "16rem" }} key={index}>
                                           
                                                <img src={img_path + movie.poster_path
                                                } class="card-img-top" alt={movie.title} />
                                           
                                            <div class="card-body">
                                                <h5 class="card-title">{movie.title}</h5>
                                                <p className='card-text '>{movie.release_date
                                                }</p>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Movie