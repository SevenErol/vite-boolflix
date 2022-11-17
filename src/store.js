import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/",
    cover_URL: "https://image.tmdb.org/t/p/",
    results: [],
    series: [],
    error: null,
    integerVote: null,
    params: {
        api_key: "047ca6274f89e4b26bb7a49cbb2609b4",
        query: "l"
    },
    callApi(url) {

        const newUrl = `${url}movie?api_key=${this.params.api_key}&query=${this.params.query}`

        const seriesUrl = `${url}tv?api_key=${this.params.api_key}&query=${this.params.query}`

        axios.get(newUrl)
            .then(response => {
                this.results = response.data.results
                // this.series = response.data.results
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

        axios.get(seriesUrl)
            .then(response => {

                this.series = response.data.results
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

    },
    searchText: '',
    src: '',
    checkFlag(movie) {
        if (movie.original_language === "it") {
            return "../assets/img/italian_flag.png"
        } else if (movie.original_language === "en") {
            return "../assets/img/great_britain_flag.png"
        } else if (movie.original_language === "fr") {
            return "../assets/img/france_flag.png"
        }
    },
    starsVote(vote) {

        switch (vote) {
            case 0:
            case 1:
            case 2:

                this.integerVote = "one star"

                break;

            case 3:
            case 4:

                this.integerVote = "two stars"

                break;

            case 5:
            case 6:

                this.integerVote = "three stars"

                break;

            case 7:
            case 8:

                this.integerVote = "four stars"

                break;

            case 9:
            case 10:

                this.integerVote = "five stars"

                break;

            default:
                break;
        }

    }

})