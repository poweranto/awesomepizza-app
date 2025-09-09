# Awesome pizza app
Awesome pizza app è un progetto dimostrativo, sviluppato in React, come Single Page Application.

Costituisce il Front-End per consumare i servizi esposti da [Awesome pizza api](https://github.com/poweranto/awesomepizza-api/).
Per utilizzare l'app è necessario prima avviare il suo Backend, seguendo le istruzioni contenute nel [README](https://github.com/poweranto/awesomepizza-api/blob/main/README.md) del progetto che espone le API.

# Stack tecnologico
- React - versione 19.1.1
- React Router - versione 7.8
- Tailwindcss - 4.1.13
- Vite - versione 7.1.2 - come build tool

# Avvio dell'applicazione
Dato che il backend **non è configurato** per ricevere richieste HTTP che provengono da un origin diversa da quella che eroga le API (CORS), è necessario avere Docker installato sulla macchina per poter avviare l'applicazione.

Docker offre la possibilità di creare una `network` esterna condivisa, che permette a container di progetti diversi, di comunicare tra di loro attraverso il nome del servizio.
In questo modo il browser può consumare le API del servizio di backend evitando errori CORS.

## Docker
Il progetto include la configurazione necessaria per eseguire l'applicazione all'interno di container Docker (per lo sviluppo). Da terminale, eseguire il seguente comando, dalla root del progetto

**IMPORTANTE:** _Assicurarsi di avere in esecuzione il backend Awesome pizza API_ 

```bash
docker compose up
```
Questo comando crea
- un container con runtime Node e l'applicazione React compilata

Al termine, aprendo il browser e visitando indirizzo [http://awesomepizza.demo.localhost](http://awesomepizza.demo.localhost) verrà visualizzata la home page
# Sezioni applicazione web

### Menù - homepage
Sezione in cui viene visualizzato il menù, con l'elenco delle pizze.
- L'utente può effettuare l'ordine tramite click su apposito pulsante.
- Verrà visualizzato il codice dell'ordine


**nota:** _non essendoci autenticazione e associazione ordine/utente è necessario ricordarsi o annotarsi il codice dell'ordine per poterne controllare lo stato._


### Ordini
Sezione in cui vengono visualizzati tutti gli ordini (in ordine di inserimento), con evidenza delle pizze da preparare e relativo stato.
- L'utente può monitorare lo stato del suo ordine accedendo a questa sezione.


### Cucina (sezione per il pizzaiolo)
Sezione per la gestione degli ordini.
- Il pizzaiolo può prendere in carico un ordine (se ne esiste almeno uno in stato `PENDING`), cliccando su apposito pulsante.
- Il pizzaiolo può completare l'ordine (l' unico in stato `IN_PROGRESS`), cliccando su apposito pulsante.

# @todo/evolutive
- inserimento di un loading al cambio route
- usare variabili di ambiente per impostare base url API
- introdurre un global state manager, 
in caso di evoluzione delle funzionalità e aumento della complessità dello state
- aggiungere paginazione per le liste
- aggiungere storybook
- aggiungere i test