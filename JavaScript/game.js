



var fighterList = ["Jon", "Jamie", "Daenerys", "Arya"];
// console.log(fighters)

var fighterList = $("#fighter");

var jon = {
    Name: 'jon',
    Health: 130,
    Attack: 27,
}

var jamie = {
    Name: 'jamie',
    Health: 120,
    Attack: 29,
}

var daenerys = {
    Name: 'daenerys',
    Health: 100,
    Attack: 27,
}

var arya = {
    Name: 'arya',
    Health: 100,
    Attack: 28,
}

var fighterStats = $("#fighterStats");

// fighterStats.append(jonHealth)

var currentFighter = '';
var currentOponent = '';

// Win game alert
var killCount = 0

let showFightButton = function(){
    if(currentOponent === ''){
        $('#fightbutton').hide()
    } else {
        $('#fightbutton').show()
    }
}

$(document).ready(function () {
    showFightButton()
    // select your fighter & move to battle area function
    $("#jonsnowCard").on("click", function () {
        $(jonsnowCard).removeClass('col-sm-3')
        if (currentFighter === '') {
            $('.fighterSpot').append(jonsnowCard)
            currentFighter = jon
        }
        else {
            $('.opponentSpot').append(jonsnowCard)
            currentOponent = jon
        }
    })

    $("#jamieCard").on("click", function () {
        $(jamieCard).removeClass('col-sm-3')
        $('.fighterSpot').append(jamieCard)
        if (currentFighter === '') {
            $('.fighterSpot').append(jamieCard)
            currentFighter = jamie
        }
        else {
            $('.opponentSpot').append(jamieCard)
            // below will clear html in opponent container
            currentOponent = jamie
        }
        showFightButton()
    })

    $("#daenerysCard").on("click", function () {
        $(daenerysCard).removeClass('col-sm-3')
        $('.fighterSpot').append(daenerysCard)
        if (currentFighter === '') {
            $('.fighterSpot').append(daenerysCard)
            currentFighter = daenerys
        }
        else {
            $('.opponentSpot').append(daenerysCard)
            currentOponent = daenerys
        }
        showFightButton()
    })

    $("#aryaCard").on("click", function () {
        $(aryaCard).removeClass('col-sm-3')
        $('.fighterSpot').append(aryaCard)
        if (currentFighter === '') {
            $('.fighterSpot').append(aryaCard)
            currentFighter = arya
        }
        else {
            $('.opponentSpot').append(aryaCard)
            currentOponent = arya
        }
        showFightButton()
    })



    // fight function
    // fight button
    $("#fightbutton").on("click", function () {
        // use the fight button function instead of if statements
        currentFighter.Health -= currentOponent.Attack
        currentOponent.Health -= currentFighter.Attack

        if (currentFighter.Name === 'jon') {
            $('#jonHealth').text(currentFighter.Health)
        } 
        if (currentFighter.Name === 'arya') {
            $('#aryaHealth').text(currentFighter.Health)
        } 
        if (currentFighter.Name === 'jamie') {
            $('#jamieHealth').text(currentFighter.Health)
        } 
        if (currentFighter.Name === 'daenerys') {
            $('#daenerysHealth').text(currentFighter.Health)
        }

        if (currentOponent.Name === 'jon') {
            $('#jonHealth').text(currentOponent.Health)
        } 
        if (currentOponent.Name === 'arya') {
            $('#aryaHealth').text(currentOponent.Health)
        } 
        if (currentOponent.Name === 'jamie') {
            $('#jamieHealth').text(currentOponent.Health)
        } 
        if (currentOponent.Name === 'daenerys') {
            $('#daenerysHealth').text(currentOponent.Health)
        }

        if (currentFighter.Health < 0) {
            alert('you have lost, how does that make you feel')
            // added this in to try and reset fighter health after defeating opponent
        } 

        if (currentOponent.Health < 0) {
            if(currentFighter.Name == 'jon'){
                currentFighter.Health = 130
            }
            $('#jonHealth').text(currentFighter.Health)
            $('.opponentSpot').html("")
            killCount++
            alert('you have defeated your opponent, select a new fighter')
        } 

        if (killCount === 3) {
            alert('congratulations, you win!')
        }

        // *** reset fighter health for each battle***




        // var jonsRemaingHealth = jon.Health =- arya.Attack
        // var aryaRemaingHealth = arya.Health -= jon.Attak

        // jon.Health = jonsRemaingHealth
        // arya.Health = aryaRemaingHealth

        // $("#jonHealth").text(jon.Health);
        // $("#aryaHealth").text(arya.Health)



    });
    // < !--Link to song-- >
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/game-of-thrones-theme-song-ringtone-30782.mp3");
    // end of document ready function
});

