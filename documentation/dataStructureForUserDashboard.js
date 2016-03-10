var applicationStore = {
    sessionList: [classSession], /* This would be sessions that are valid for the current user. */
    currentSession: {classSession}, /* Should be contained w/in the sessionList above. */
    /* StudentList */
    studentList: [],

    /* AddDonation, EditDonation? */
    currentDonation: {...}
}

var userDashboardPage = {
    currentSession: {/* classSession */},
    studentList: [/* studentHourDetailsInformation*/],
    newDonation: {newDonation}
};

var newDonation = {
    selectedStudents: [/*ids*/],
    studentSelectionList: [/*studentSelectionInformation*/],
    totalDonation: number,
    donationType: [ "hours", "dollars" ],
    donationDate: date
}

var classSession = {
    id: "uuid",
    name: "name",
    startDate: date,
    endDate: date
}

var studentHourDetailsInformation = {
    id: "uuid",
    studentName: "name",
    userHours: number,
    otherUsersHours: number,
    remainingHours: number,
    totalHoursNeeded: number
}


var studentSelectionInformation = {
    id: "uuid",
    studentName: "name"
}
