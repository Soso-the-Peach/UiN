import './styles.css';
import { users } from './util';

// TODO: Hent HTML #id med getElementById
    const searchInput = document.getElementById("name");
    const filterInput = document.getElementById("age");
    const filterBtn = document.getElementById("filter");
    const UserList = document.getElementById("users");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
    function createTable(users){
        UserList.innerHTML = null;
        UserList.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;

        for (const user of users){
            UserList.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
        };
    }

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
    function handleSearch() {
        const searchName = searchInput.value;
        if (searchName){
            const searchResult = users.find(
                (user) => user.name.toLowerCase() === searchName.toLowerCase()
            );
            if (searchResult) {
                createTable([searchResult]);
            } else {
                UserList.innerHTML = `Fant ingen med navn ${searchName}`;
            }

        } else {
            createTable(users);
        }
    };

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
    function handleFilter() {
        const filterValue = filterInput.value;
        if (filterValue && Number(filterValue)) {
            const filterResult = users.filter((user) => user.age > filterValue);
            if (filterResult && filterResult.length > 0) {
                createTable(filterResult);
              } else {
                UserList.innerHTML = `Fant ingen over ${filterValue} år`;
              }
        } else {
            createTable(users);
          }
    }


    function main() {
        createTable(users)
    };

    main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInput.addEventListener('keyup', handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener('click', handleFilter);