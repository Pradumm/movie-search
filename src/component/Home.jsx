import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Movie from './Movie'
import Footer from './Footer'

let Api_key = "&api_key=3407e234e4eb43ed4e5f5f3ce456405c"
let base_key = "https://api.themoviedb.org/3"

let url = base_key + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" + Api_key

const Home = () => {
    const [movie, setmovie] = useState([])
    const [url_key, seturl] = useState(url)
    const [search, setsearch] = useState('')

    const getdata = async () => {

        await axios.get(url).then((res) => {
            let result = res.data.results
            console.log(result, "_________result")
            setmovie(result)
        })

    }

    useEffect(() => {
        getdata();
    }, [url_key])

    const Moviedata = (moviename) => {
        // let arr = ["Movies", "TV Shows", "Kid", "More"]
        if (moviename === "Movies") {
            url = base_key + "/discover/movie?sort_by=popularity.desc" + Api_key

        }
        if (moviename === "TV Shows") {
            url = base_key + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + Api_key

        }
        if (moviename === "Kid") {
            url = base_key + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + Api_key

        }
        if (moviename === "More") {
            url = base_key + "/discover/movie?with_genres=18&primary_release_year=2014" + Api_key

        }
        seturl(url)
    }

    // console.log("__________ser ", search)
    const Searchmovie = (e) => {
        setsearch(e.target.value)

    }

    const Seardata = (evt) => {
        if (evt.key == "Enter") {
            console.log("hellow<<<<<<<<<")
            // url = base_key = "/search/movie?&api_key=3407e234e4eb43ed4e5f5f3ce456405c&query=" + search
            url = `https://api.themoviedb.org/3/search/movie?&api_key=3407e234e4eb43ed4e5f5f3ce456405c&query=${search}`
            seturl(url)
            setsearch(" ")

        }

    }

    return (

        <>
            <div className="">
                <Header Moviedata={Moviedata} Searchmovie={Searchmovie} Seardata={Seardata} />
                <div className='mt-5'>
                    <Movie Movie={movie} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home