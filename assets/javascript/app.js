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

$("#generate-ideas").on("click", getInputs)

function getInputs() {
    // use value
    // use name
    // #indayForm

    // how to capture the onsite, virtual, and offsite inputs???
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

