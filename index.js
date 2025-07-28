let plusOne = document.getElementById("+1")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function homeCounterPlusOne() {
    
        homeCount += 1
        homeScore.textContent= homeCount
        
}

function homeCounterPlusTwo() {
    
        homeCount += 2
        homeScore.textContent= homeCount
        
}

function homeCounterPlusThree() {
    
        homeCount += 3
        homeScore.textContent= homeCount
        
}

function guestCounterPlusOne() {
    
        guestCount += 1
        guestScore.textContent= guestCount
    
}

function guestCounterPlusTwo() {
    
        guestCount += 2
        guestScore.textContent= guestCount
    
}

function guestCounterPlusThree() {
    
        guestCount += 3
        guestScore.textContent= guestCount
    
}
