//Leeftijd calculator
const sportCodeDropdown = document.querySelector('[data-role="sport-code-dropdown"]');
const yearDropdown = document.querySelector('[data-role="year-dropdown"]');
const monthDropdown = document.querySelector('[data-role="month-dropdown"]');
const leagueAgeResult = document.querySelector('[data-role="league-age-result"]');

sportCodeDropdown.addEventListener('change', () => {
    calculateLeagueAge();
});

yearDropdown.addEventListener('change', () => {
    calculateLeagueAge();
});

monthDropdown.addEventListener('change', () => {
    calculateLeagueAge();
});


calculateLeagueAge = () => {

    let sportCode = sportCodeDropdown.value;
    let year = yearDropdown.value;
    let month = monthDropdown.value;

    leagueAgeResult.innerHTML = "";

    if (sportCode !== '' && year !== '' && month !== '') {
        let grepResult = charterSportLeagueAgeMatrixRows.filter(leAGe = (e, i) => {
            return e.SportCode == parseInt(sportCode) &&
                e.Year == parseInt(year) &&
                e.Month == parseInt(month);
        });
        let leagueAge = grepResult.length > 0 ? grepResult[0].LeagueAge : null;
        let leaguePlay = "nvt";
        let sportType;

        if (sportCode == 1) {
            sportType = "Baseball";
        } else {
            sportType = " Softball";
        }

        switch (leagueAge) {
            case 10:
                leaguePlay = "Little league";
                break;
            case 11:
                if (sportCode == 2) {
                    leaguePlay = "Little league";
                } else {
                    leaguePlay = "Little of Intermediate league";
                }
                break;
            case 12:
                if (sportCode == 2) {
                    leaguePlay = "Little of Junior league";
                } else {
                    leaguePlay = "Little, Intermediate of Junior league";
                }
                break;
            case 13:
                if (sportCode == 2) {
                    leaguePlay = "Junior of Senior league";
                } else {
                    leaguePlay = "Intermediate, Junior of Senior league";
                }
                break;
            case 14:
                leaguePlay = "Junior of Senior league";
                break;
            case 15:
                leaguePlay = "Senior league";
                break;
            case 16:
                leaguePlay = "Senior league";
                break;
            default:
                leaguePlay = "Training, geen NK";
                break;
        }

        console.log(leaguePlay + " " + leagueAge + " " + sportCode);
        // is alleen bij honkbal
        // zet info in de hiddenfields
        document.querySelector("#leeftijd").value = leagueAge;
        document.querySelector('#league').value = leaguePlay;
        document.querySelector("#bb_sb").value = sportType;


        if (sportCode == 99) {
            document.querySelector('#stap2').style.display = 'none';
        } else {
            if (leagueAge !== null && leagueAge > 9) {
                leagueAgeResult.innerHTML = 'Volgens de little league leeftijd ben je <b>' +
                    leagueAge +
                    '</b> jaar oud. Je kunt je inschrijven voor NK Little League 2020 programma en deelnemen in <b>' +
                    leaguePlay + ' ' + sportType + "</b>.";
                document.querySelector('#stap2').style.display = 'flex';
            } else if (leagueAge !== null && leagueAge < 10) {
                leagueAgeResult.innerHTML = 'Volgens de little league leeftijd ben je <b>' +
                    leagueAge +
                    '</b> jaar oud. Helaas voldoe je niet aan de Little League leeftijdseis om mee te doen aan het NK. Je kunt mogelijk wel meedoen aan het Little League trainingsprogramma in je regio. De regiocoördinator kan hierover contact met je opnemen. <br>Voor meer m.b.t. het meedoen aan het NK kijk <a href=\"https://www.nklittleleague.nl/l/page/ik_wil_meedoen_met_de_little_league.html\" target=\"_blank\">op onze website.</a> Of bekijk de officiële Little League agecharts: <a href=\"https://www.littleleague.org/downloads/2020-baseball-age-chart/\" target=\"_blank\">Baseball</a> en <a href=\"https://www.littleleague.org/downloads/2020-softball-age-chart\" target=\"_blank\">Softball</a>.'
                    ;
                document.querySelector('#stap2').style.display = 'flex';
            } else {
                leagueAgeResult.innerHTML =
                    'Helaas voldoe je niet aan de Little League leeftijdseis. Je kunt je jammer genoeg niet inschrijven voor het NK Little League.<br>Voor meer informatie m.b.t. het meedoen aan het NK <a href=\"https://www.nklittleleague.nl/l/page/ik_wil_meedoen_met_de_little_league.html\" target=\"_blank\">op onze website.</a> Of bekijk de officiële Little League agecharts: <a href=\"https://www.littleleague.org/downloads/2020-baseball-age-chart/\" target=\"_blank\">Baseball</a> en <a href=\"https://www.littleleague.org/downloads/2020-softball-age-chart\" target=\"_blank\">Softball</a>.'
                    ;
                document.querySelector('#stap2').style.display = 'none';
            }
        }
    }
};

