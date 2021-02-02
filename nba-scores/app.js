const spursGames = [{
    awayTeam: {
        team: 'Golden State',
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
        team: 'Dallas',
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
        team: 'Boston',
        points: 114,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Phoenix',
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
        team: 'Houston',
        points: 130,
        isWinner: false
    },
    homeTeam: {
        team: 'San Antonio',
        points: 144,
        isWinner: true
    }
}];

const ulParent = document.createElement('ul');

document.body.prepend(ulParent);

for(let game of spursGames) {
    const { homeTeam, awayTeam } = game;
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const gameLi = document.createElement('li');
    let scoreLine;

    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
        scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    
    const spurs = hTeam === 'San Antonio' ? homeTeam : awayTeam;
    console.log(spurs);
    gameLi.classList.add(spurs.isWinner ? 'win' : 'loss'); 
    const teamNames = `${aTeam} @ ${hTeam} `
    gameLi.innerHTML = `${teamNames} ${scoreLine}`
    ulParent.append(gameLi);
}

