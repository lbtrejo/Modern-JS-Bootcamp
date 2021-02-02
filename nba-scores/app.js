const spursGames = [{
    awayTeam: {
        team: 'Memphis',
        points: 119,
        isWinner: false
    },
    homeTeam: {
        team: 'San Antonio',
        points: 123,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'San Antonio',
        points: 99,
        isWinner: false
    },
    homeTeam: {
        team: 'Memphis',
        points: 111,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'San Antonio',
        points: 121,
        isWinner: true
    },
    homeTeam: {
        team: 'Memphis',
        points: 114,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Memphis',
        points: 107,
        isWinner: false
    },
    homeTeam: {
        team: 'San Antonio',
        points: 108,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'Memphis',
        points: 130,
        isWinner: false
    },
    homeTeam: {
        team: 'San Antonio',
        points: 144,
        isWinner: true
    }
}];

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');
    for(let game of games) {
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game);        
        gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss'); 
        ulParent.append(gameLi);
    }   
    return ulParent;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam} `
    let scoreLine;

    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
        scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
}

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const sasSection = document.querySelector('#sas');
const memSection = document.querySelector('#mem');


const chart1 = makeChart(spursGames, 'San Antonio');
sasSection.appendChild(chart1);

const chart2 = makeChart(spursGames, 'Memphis');
memSection.appendChild(chart2);