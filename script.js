function updateclock()
{
    const now= new Date();
    const hours= now.getHours().toString().padStart(2,0);
    const min= now.getMinutes().toString().padStart(2,0);
    const sec= now.getSeconds().toString().padStart(2,0);
    const timestring =`${hours}:${min}:${sec}`;
    document.getElementById("clock").textContent=timestring;

}

updateclock();
setInterval(updateclock, 1000);