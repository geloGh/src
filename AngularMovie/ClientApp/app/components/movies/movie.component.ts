import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'movies',
    template: require('./movie.component.html')
})
export class MovieComponent {
    public films: Film[];

    constructor(http: Http) {
        http.get('/api/movies/list').subscribe(result => {
            this.films = result.json();
        });
    }
}

interface Film {
    dateFormatted: string;
    title: string;
}
