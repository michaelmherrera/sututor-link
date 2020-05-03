/* Handles browser being object having the name 'chrome' when used on chrome*/
const browser = window.browser || window.chrome;

const url_base = "https://sututor.stanford.edu/TracWeb40/schedule.4sp?calStartDate=";

function open_tab(when) {
    /**
     * Given a datetime, opens the TutorTrac calendar for that date
     */
    var date_str = when.toLocaleDateString();
    var calendar_url = "".concat(url_base, date_str);
    // First, goes to the tutor profile view. Ommitting this can cause login errors
    console.log('about to execute')
    browser.tabs.create({
        url: "https://sututor.stanford.edu/TracWeb40/ajxData.4sp?type=switchProfile&dir=sc"
    });
    
}

function open_today(today) {
    /**
     * Open the TutorTrac calendar for the current week
     */
    var today = new Date();
    open_tab(today);
}

function open_next_week(today) {
    /**
     * Open the TutorTrac calendar for the coming week
     */
    var today = new Date();
    var next_week = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    open_tab(next_week);
}

var today_button = document.getElementById("today");
var next_week_button = document.getElementById("next_week");
next_week_button.addEventListener("click", open_next_week);
today_button.addEventListener("click", open_today);
