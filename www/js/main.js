function getDateTime(event){
    let result = document.querySelector('.result');
    const city = event.target.value;
    /*
    Lublin jest w strefie GMT+1
    Nowy Jork, Stany Zjednoczone jest w strefie GMT-5
    Sydney Nowa Południowa Walia, Australia jest w strefie GMT+11
    */
    var date = new Date();
    var timezone = date.getTimezoneOffset()/60;
    switch(city){
        case 'Lublin': timezone+= 1; break;
        case 'Nowy York': timezone-= 5; break;
        case 'Sydney': timezone+= 11; break;
        default: break;
    }
    date.setHours(date.getHours()+ timezone);
    var day = date.getDate();
    if(day<10) day="0"+date.getDate();
    var month = date.getMonth()+1;
    if(month<10) month="0"+(date.getMonth()+1);
    var year = date.getFullYear();
    var hour = date.getHours();
    if(hour<10) hour="0"+date.getHours();
    var minutes = date.getMinutes();
    if(minutes<10) minutes="0"+date.getMinutes();

    if(city==""){
        result.textContent = "";
    }
    else {
        result.textContent = `Czas: ${hour}:${minutes} `;
        let dayMonth = document.createElement("div");
        dayMonth.textContent = `Data: ${day}.${month}.${year}`;
        result.append(dayMonth);
    }
};