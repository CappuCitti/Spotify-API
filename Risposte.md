# Domande

### 01.0 - [LAB]
> 1. **Che senso ha parlare di routing in una Single Page Application?**
> 2. **Che differenza c’è tra il routing lato server (in Node js o Python) e il routinglato client  in Angular?**

1. _
2. _

> 1. **Cosa significa che un componente è @Injectable?**
> 2. **In che modo puoi fornire dati alle API di spotify (ad esempio il titolo di una traccia e il fatto che sia una traccia)**
> 3. **In che formato va fornito il codice OAuth? in quale parte della richiesta http va scritto?**
> 4. **Cosa ritorna lo spotify service?**
> 5. **Come si può usare lo spotify service all’interno di un componente?**
> 6. **Per quale ragione abbiamo diviso l’applicazione in componenti, servizi e routing?**

1. _
2. _
3. _
4. _
5. _
6. _

> 1. **A cosa serve il metodo submit?**
> 2. **Da dove viene preso il valore della query?**

1. _
2. _

> 1. **A cosa servono le seguenti righe di codice?**
>     ```html
>       <div *ngIf="!results.tracks || results.tracks.items.length ==0">
>         <div *ngIf="results.tracks &&  results.tracks.items.length > 0">
>           <div *ngFor="let t of results.tracks.items">
>             <img src="{{ t.album.images[0].url }}" class="img-responsive">
>               {{ t.artists[0].name }}
>               ...
>     ```

1. _

### 01.1 - [LAB]
> 1. **Descrivi queste linee di codice (puoi far riferimento a [questa guida](https://angular.io/guide/router#configuration))**
>     ```ts
>       const routes: Routes = [
>         { path: 'about', component: AboutComponent },
>         { path: 'search', component: SearchComponent }
>        ];
>     ```
> 2. **Quale tag si usa per contenere le differenti route nel file app.component.html**

1. _
2. _

> 1. **Come fa il prof a sapere l’url specifico da richiamare sulle API di Spotify?**
> 2. **A cosa serve il routeObs: `Observable<ParamMap>`?**
> 3. **A cosa serve il parametro del costruttore private route: ActivatedRoute?**
> 4. **A cosa serve la ParamMap ottenuta dal `routeObs` `(params: ParamMap)`?**

1. _
2. _
3. _
4. _

> 1. **Cosa ritorna il metodo getTrack (`return this.http.get(url, { headers });`)?**
> 2. **Descrivi queste righe di codice: `this.spotifyServiceObs = this.service.getTrack(trackId); this.spotifyServiceObs.subscribe((data)=>this.track = data);`**

1. _
2. _