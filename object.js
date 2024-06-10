// const person = {
//     name :'Namuunaa',
//     age : 66,
//     hobby : 'read book', 
//     birthday : "oct22",
//     lastname : "baohrh",

// }
// console.log(person.birthday)

const board = [
    {
        title : 'To Do', 
        bgColor: 'green',
    },
    {
        title : "in Progress",
        bgColor : "yellow",
    },
    {
        title : "Done",
        bgColor : "green",
    },
    {
        title : "Blocked",
        bgColor : "red",
    },


]

board.map((element) => {
    board(el.title, el.bgColor,5);
}
)