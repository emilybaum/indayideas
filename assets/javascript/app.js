// create a firebase database for location and event type engagement
var firebaseConfig = {
    apiKey: "AIzaSyAWW7bDrI4Yw5hRJEdVCqi6codGz-709LE",
    authDomain: "inday-ideas.firebaseapp.com",
    databaseURL: "https://inday-ideas.firebaseio.com",
    projectId: "inday-ideas",
    storageBucket: "",
    messagingSenderId: "221292517606",
    appId: "1:221292517606:web:1b47839c8d5ce0a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
// store clicks for onsite, offsite, virtual in database

var onsiteLocation = [
    {
        event: 'Brainstorm the year ahead by asking your team, “What do you want to accomplish as a team?”',
        detailsToExecute: "book a conference room and talk about it",
        indayTheme: 'January "Vision"',
        eventDuration: '1 hour',
        eventPrep: '15 min'
    },
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
];
var offsiteLocation = [
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
];
var virtualLocation = [
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
    {
        event: '',
        detailsToExecute: '',
        indayTheme: '',
        timeCommitment: '',
    },
];



// variables for selections made
var onsiteSelected = false;
var offsiteSelected = false;
var virtualSelected = false;

var officeLocation = "";
var officeLocationIndex = 0;

// selecting the button inputs
document.getElementById("onsite-button").addEventListener("click", function () {
    if (onsiteSelected === false) {
        onsiteSelected = true;
        $("#onsite-button").addClass("selected")
    }
    else if (onsiteSelected === true) {
        onsiteSelected = false;
        $("#onsite-button").removeClass("selected")
    }   
});

document.getElementById("offsite-button").addEventListener("click", function () {
    if (offsiteSelected === false) {
        offsiteSelected = true;
        $("#offsite-button").addClass("selected")
    }
    else if (offsiteSelected === true) {
        offsiteSelected = false;
        $("#offsite-button").removeClass("selected")
    }
});

document.getElementById("virtual-button").addEventListener("click", function () {
    if (virtualSelected === false) {
        virtualSelected = true;
        $("#virtual-button").addClass("selected")
    }
    else if (virtualSelected === true) {
        virtualSelected = false;
        $("#virtual-button").removeClass("selected")
    }
});


$("#generate-ideas").on("click", getInputs)

function getInputs() {
    event.preventDefault();
   
    var x = document.getElementById("locationSelector").selectedIndex;
    var location = document.getElementById("locationSelector").options;
    officeLocation = location[x].text
    officeLocationIndex = location[x].index

    if (officeLocationIndex === 0) {
        $("#validate-location").removeClass("d-none")
        return;
    }
    generateIdeas()
}

function generateIdeas() {
    $("#validate-location").addClass("d-none")
    if (onsiteSelected !== true && offsiteSelected !== true && virtualSelected !== true) {
        $("#validate-event").removeClass("d-none")
        return;
    }
    else if (onsiteSelected === true) {
        // show onsite events
        showOnsite();
    }
    else if (offsiteSelected === true) {
        // show offsite events
        showOffsite();
    }
    else if (virtualSelected === true) {
        // show virtual events
        showVirtual();
    }
    removeValidation()
}

function removeValidation() {
    $("#validate-location").addClass("d-none");
    $("#validate-event").addClass("d-none");
}

function showOnsite() {

}

function showOffsite() {

}

function showVirtual() {

}











// ideal location (onsite only vs offsite vs virtual) -- option to select multipleones of these
// individual vs group at one time
// size of team -- (small, medium, large)
// theme fo the month
// STEPS NEEDED TO MAKE THE EVENT HAPPEN!

// OTHER CONSIDERATIONS
// cost vs free

// WHAT THE USER CAN SEE/DO
// have a check mark box for onsite, offsite, virtual
// have an option to display ideas by month (and display by onsite, offsite, virtual)
// get a randomly generated output based on onsite, offsite, virtual


// OTHER IDEAS
// LinkedIn Speaker Series replay
// https://drive.google.com/file/d/1HWPlF5sZxM7js6LsLg3ANOvlWit2qhgd/view

