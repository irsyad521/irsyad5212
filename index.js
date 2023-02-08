const tekan = document.getElementById("btn");

document.addEventListener("click", function (e) {
  if (tekan.contains(e.target)) {
    const hasil = document.getElementById("number").value;
    document.getElementById("hasil").value = "";
    const string = String(hasil);
    let total = 0;
    let arah = 0;
    for (const i of string) {
      if (i == 1 || i == 0) {
        arah++;
      } else {
        arah--;
      }
    }
    if (string.length === 8 && arah == 8) {
      const angka = Number(string);
      let ulang = 7;
      for (const i of string) {
        if (i == 1) {
          let tampil = 2 ** ulang;
          total = total + tampil;
          ulang = ulang - 1;
        } else if (i == 0) {
          ulang = ulang - 1;
        }
        const data = String(total);
        document.getElementById("hasil").value = data;
      }
    } else {
      console.log("angka harus berjumlah 8");
      console.log("angka hanya terdiri dari 1 dan 0");
    }
  }
});
