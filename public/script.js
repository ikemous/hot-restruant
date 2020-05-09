$("#submitBtn").on("click", event =>{
    event.preventDefault();
    const newReservation = {
        name: "",
        number: "",
        email: "",
        id: "",
        additionalComments: ""
    };
    $.post("/api/current", newReservation)
})


function checkCurrentResrvationAmount()
{
    $.get("/api/current", data=>{
        return data.length;
    });
}