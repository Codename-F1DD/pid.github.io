function scrollToProduk() {
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
}

function beli(game) {
    alert("Kamu memilih top up " + game);

    // efek tambahan
    console.log("User klik: " + game);
}

let gameDipilih = "";

function beli(game) {
    gameDipilih = game;
    document.getElementById("popup").style.display = "block";
}

function tutupPopup() {
    document.getElementById("popup").style.display = "none";
}

function prosesBayar() {
    let id = document.getElementById("userId").value;
    let hp = document.getElementById("noHp").value;
    let nominal = document.getElementById("nominal").value;

    if (id === "" || hp === "") {
        alert("Lengkapi data dulu!");
        return;
    }

    let pesan = `Halo admin, saya mau top up ${gameDipilih}
ID: ${id}
No HP: ${hp}
Nominal: ${nominal}`;

    let url = "https://wa.me/6285719592252?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}

/* SEARCH */
function searchGame() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.innerText.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}