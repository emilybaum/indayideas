// create a firebase database for location and event type engagement

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

$("#generate-ideas").on("click", myFunction)
function myFunction() {
    var elements = document.getElementById("indayForm").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    document.getElementById("indayIdeas-display").innerHTML = JSON.stringify(obj);
}



// var x = document.getElementById("indayForm").elements.length;
// console.log("window " + x)

// $("#generate-ideas").on("click", function (event) {

//     var x1 = document.getElementById("indayForm").elements.length;
//     console.log("click " + x1[3])
//     event.preventDefault();
    // var onsiteInput = document.getElementById("indayForm").elements.namedItem("onsite").value;
    // var onsiteInput = document.forms['indayForm'].elements['onsite'];

    //     alert("this is the input " + onsiteInput[0].value)
    
    // var virtualInput = document.getElementById("indayForm").elements.namedItem("virtual").value;
    // var offsiteInput = document.getElementById("indayForm").elements.namedItem("offsite").value;

    // if (onsiteInput === true) {
    //     // display only onsite detials 
    //     alert("this is the onsite alert")
    // }
    // if (virtualInput === true) {
    //     // display only onsite detials 
    //     alert("this is the virtual alert")
    // }
    // if (offsiteInput === true) {
    //     // display only onsite detials 
    //     alert("this is the offsite alert")
    // }


// });



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

