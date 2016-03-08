var userDashboardPage = {
    currentSession: {/* session */},
    studentList: [/* studentInformation*/],
    newDonation: {
        selectedStudents: [/*ids*/],
        studentSelectionList: [/*studentSelectionInformation*/],
        totalDonation: number,
        donationType: [ "hours", "dollars" ],
        donationDate: date
    }
}

var session = {
    id: "uuid",
    name: "name",
    startDate: date,
    endDate: date
}

var studentInformation = {
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
