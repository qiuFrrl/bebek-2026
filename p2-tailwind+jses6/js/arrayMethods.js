//array methods
const numbers = [1, 2, 3, 4, 5];

//map untuk membuat array baru dengan hasil yang dimodifikasi
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//filter untuk membuat array baru dengan elemen yang memenuhi kondisi tertentu
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

//reduce untuk mengakumulasi nilai dari array menjadi satu nilai tunggal
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//slice untuk mengambil sebagian elemen dari array tanpa mengubah array asli
const sliced = numbers.slice(1, 4);
console.log(sliced);

//splice untuk mengubah array dengan menambahkan, menghapus, atau mengganti elemen
const spliced = numbers.splice(2, 1);
console.log(numbers);

//find untuk menemukan elemen pertama yang memenuhi kondisi tertentu
const found = numbers.find(num => num > 4);
console.log(found);
