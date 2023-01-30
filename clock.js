
window.onload = function () {
  function klocka() {
    let time = new Date();
    let timme = time.getHours();
    let minut = time.getMinutes();
    let sekund = time.getSeconds();

    if (timme < 10) {
      timme = "0" + timme;
    }

    if (minut < 10) {
      minut = "0" + minut;
    }

    if (sekund < 10) {
      sekund = "0" + sekund;
    }

    let tid = timme + ":" + minut + ":" + sekund;
    document.getElementById("time").innerHTML = tid;

    setTimeout(klocka, 1000);
  }

  klocka();
};