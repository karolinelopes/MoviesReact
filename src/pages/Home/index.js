import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies(){
        //Url da API: https://sujeitoprogramador.com/r-api/?api=filmes/
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({movies: json});
            console.log(json);
        });
    }

    render(){
        return(
            <div className="container">
               <div className="list-movies">
                    {this.state.movies.map((movie) =>{
                        return(
                            <article key={movie.id} className="movie">
                                <strong>{movie.nome}</strong>
                                <img src={movie.foto} alt="Capa" />
                                <Link to={`/movie/${movie.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div> 
            </div>
        );
    }
}

export default Home;