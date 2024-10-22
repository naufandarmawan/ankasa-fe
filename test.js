function solution(TinggiAwal, LamaHari, Pertumbuhan) {
  let TinggiAkhir = TinggiAwal;

  for (let i = 0; i < LamaHari; i++) {
    TinggiAkhir += TinggiAkhir * Pertumbuhan; // Menghitung pertumbuhan harian
  }

  return Math.round(TinggiAkhir * 100) / 100; // Bulatkan hasil akhir ke dua digit di belakang koma
}

// Contoh penggunaan
const tinggi1 = solution(200, 5, 0.05); // Tinggi Awal = 200, Lama Hari = 5, Pertumbuhan = 0.05
console.log("Tinggi Akhir 1:", tinggi1);

const tinggi2 = solution(250, 2, 0.02); // Tinggi Awal = 250, Lama Hari = 2, Pertumbuhan = 0.02
console.log("Tinggi Akhir 2:", tinggi2);

function solution(Tinggi) {
  for (let i = 1; i <= Tinggi; i++) {
    let spaces = ""; // Initialize spaces
    let middle = ""; // Initialize middle
    for (let j = 1; j <= Tinggi - i; j++) {
      spaces += " "; // Calculate leading spaces
    }
    for (let k = 1; k <= i * 2; k++) {
      middle += "*"; // Calculate stars
    }
    console.log(spaces + middle); // Print the line without slashes
  }
}

// Example usage
solution(3);
solution(5);

function solution(Kata) {
  let result = ""; // Initialize result string
  for (let i = 0; i < Kata.length; i++) {
    let isDuplicate = false; // Flag to check for duplicates
    for (let j = 0; j < result.length; j++) {
      if (Kata[i] === result[j]) {
        // Check if character is already in result
        isDuplicate = true; // Set flag if duplicate found
        break; // Exit inner loop
      }
    }
    if (!isDuplicate) {
      // If not a duplicate, add to result
      result += Kata[i];
    }
  }
  return result; // Return the string with duplicates removed
}

// Example usage
console.log(solution("Imagination")); // Output: "Imaginot"
console.log(solution("Association")); // Output: "Asocitn"

function solution(HargaProduk) {
  let totalHarga = 0;
  let totalDiskon = 0;
  let bonus = "";

  // Calculate total price
  for (let i = 0; i < HargaProduk.length; i++) {
    totalHarga += HargaProduk[i];
  }

  // Determine discount and bonus based on total price
  if (totalHarga > 400000) {
    totalDiskon = totalHarga * 0.1; // 10% discount
    bonus = "Ransel";
  } else if (totalHarga > 200000) {
    totalDiskon = totalHarga * 0.07; // 7% discount
    bonus = "Payung";
  } else if (totalHarga > 70000) {
    totalDiskon = totalHarga * 0.05; // 5% discount
    bonus = "Topi";
  }

  const hargaAkhir = totalHarga - totalDiskon;

  // Output results
  console.log("Total Harga:", totalHarga);
  console.log("Total Diskon:", totalDiskon);
  console.log("Bonus:", bonus);
  console.log("Harga Akhir:", hargaAkhir);
}

// Example usage
solution([2000, 50000, 100000]);

function solution(noAkun, nominal) {
  let results = [];
  let totalDebit = 0;
  let totalKredit = 0;

  for (let i = 0; i < noAkun.length; i++) {
    let debit = nominal[i * 2] || 0; // Assuming debit is at even indices
    let kredit = nominal[i * 2 + 1] || 0; // Assuming kredit is at odd indices
    totalDebit += debit;
    totalKredit += kredit;

    results.push({
      noAkun: noAkun[i],
      debit: debit,
      kredit: kredit,
    });
  }

  // Determine balance status
  let status = totalDebit === totalKredit ? "Balance" : "Not Balance";

  // Output results
  console.log("Results:", results);
  console.log("Total Debit:", totalDebit);
  console.log("Total Kredit:", totalKredit);
  console.log("Status:", status);
}

// Example usage
solution([111, 211, 201], [200000, 0, 200000, 50000, 200000, 200000]);
solution([111, 201], [100000, 0, 0, 120000]);
