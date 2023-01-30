# Domande

### 01.0 - [LAB]
> 1. **Che senso ha parlare di routing in una Single Page Application?**
> 2. **Che differenza c’è tra il routing lato server (in Node js o Python) e il routinglato client  in Angular?**

1. Il routing in una Single Page Application consente di gestire la navigazione all'interno dell'applicazione, simulando diverse pagine o URL senza ricaricare la pagina. Questo migliora l'esperienza dell'utente e consente di creare URL significative che possono essere condivise.
2. Il routing lato server e il routing lato client differiscono in termini di come vengono gestite le richieste e come vengono generate le pagine.
   1. Routing lato server:
      1. Viene eseguito sul server e genera HTML dinamicamente in base alle richieste dell'utente.
      2. Ogni volta che l'utente effettua una richiesta, il server genera una nuova pagina e la invia al browser.
      3. Questo è adatto per le applicazioni che hanno bisogno di supportare i motori di ricerca e hanno esigenze di sicurezza elevate.
   2. Routing lato client:
      1. Viene eseguito sul browser e gestisce la navigazione dell'utente senza ricaricare la pagina.
      2. Le richieste dell'utente vengono gestite tramite JavaScript, che modifica la pagina esistente invece di generarne una nuova.
      3. Questo è adatto per le applicazioni che richiedono una migliore esperienza utente e una maggiore velocità di navigazione.

> 1. **Cosa significa che un componente è @Injectable?**
> 2. **In che modo puoi fornire dati alle API di spotify (ad esempio il titolo di una traccia e il fatto che sia una traccia)**
> 3. **In che formato va fornito il codice OAuth? in quale parte della richiesta http va scritto?**
> 4. **Cosa ritorna lo spotify service?**
> 5. **Come si può usare lo spotify service all’interno di un componente?**
> 6. **Per quale ragione abbiamo diviso l’applicazione in componenti, servizi e routing?**

1. In Angular, `@Injectable` è un decoratore che indica che una classe è un servizio e può essere iniettato come dipendenza. In questo modo, è possibile condividere le funzionalità tra diversi componenti dell'applicazione.
2. Queste informazioni possono essere inviate tramite i parametri della richiesta, che vengono inseriti insieme all'Header nella richiesta
3. Il codice viene mandato come stringa associato alla parola `Bearer`, viene inserito nel campo `Authorization` (Esempio: `Authorization: Bearer mF_9.B5f-4.1JqM`)
4. Restituisce le informazioni dell'artista dato il suo ID
5. Importandolo e richiamndo una delle sue funzioni pubbliche
6. Qualita' del codice

> 1. **A cosa serve il metodo submit?**
> 2. **Da dove viene preso il valore della query?**

1. Raccoglie le informazioni della form a cui e' associata e invia una richiesta allo SpotifyService che restituisce le informazioni del brano associato
2. Dall'`input` a cui e' associata la funzione

> 1. **A cosa servono le seguenti righe di codice?**
>     ```html
>       <div *ngIf="!results.tracks || results.tracks.items.length == 0">
>         <div *ngIf="results.tracks &&  results.tracks.items.length > 0">
>           <div *ngFor="let t of results.tracks.items">
>             <img src="{{ t.album.images[0].url }}" class="img-responsive">
>               {{ t.artists[0].name }}
>               ...
>     ```

1. Le linee di codice indicate eseguono lo stesso controllo ma in modi differenti e mostrano il risultato di `tracks` sono se:
   1. `results.tracks` e' diverso a `undefined` e la lunghezza dell'array degli items e' uguale a 0
   2. `results.tracks` e' uguale a `undefined` e la lunghezza dell'array degli items e' superiore a 0

### 01.1 - [LAB]
> 1. **Descrivi queste linee di codice (puoi far riferimento a [questa guida](https://angular.io/guide/router#configuration))**
>     ```ts
>       const routes: Routes = [
>         { path: 'about', component: AboutComponent },
>         { path: 'search', component: SearchComponent }
>        ];
>     ```
> 2. **Quale tag si usa per contenere le differenti route nel file app.component.html**

1. Crea un array di oggetti chiamato `routes` di tipo `Routes`, ognuno di essi contiene il nome della route (`path`) e il componente di riferiemnto.
2. Il tag `<router-outlet>` mostra i componenti, dichiarati in precedenza, in base alla route attiva  

> 1. **Come fa il prof a sapere l’url specifico da richiamare sulle API di Spotify?**
> 2. **A cosa serve il routeObs: `Observable<ParamMap>`?**
> 3. **A cosa serve il parametro del costruttore private route: ActivatedRoute?**
> 4. **A cosa serve la ParamMap ottenuta dal `routeObs` `(params: ParamMap)`?**

1. Lo ha trovato nella documentazione
2. Resta in ascolto dei cambiamenti dell'indirizzo di ricerca
3. Serve per rendere disponibile in tutto il modulo la classe `ActivatedRoute` con il nome di `route` 
4. Essa contiene le informazni dell'indirizzo di ricerca

> 1. **Cosa ritorna il metodo getTrack (`return this.http.get(url, { headers });`)?**
> 2. **Descrivi queste righe di codice: `this.spotifyServiceObs = this.service.getTrack(trackId); this.spotifyServiceObs.subscribe((data)=>this.track = data);`**

1. Un `Observable`
2. La prima parte crea un `Observable`, la seconda si sottoscrive ad esso e resta in ascolto di risposte.