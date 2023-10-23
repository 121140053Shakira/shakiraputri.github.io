const datamhs = [
    {
        nama: "Shakira Putri Abrar",
        nim: "105021654321",
        prodi: "Teknik Informatika",
        email: "shakira@gmail.com",
        alamat: "Jl. Sagitarius",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Galih Ramadhan",
        nim: "105021223456",
        prodi: "Teknik Informatika",
        email: "galih@gmail.com",
        alamat: "Jl. Aries No. 6",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Budi Hadiman",
        nim: "105021867543",
        prodi: "Sistem Informasi",
        email: "budi@gmail.com",
        alamat: "Jl. Aquarius No. 9",
        jenis_kelamin: "Laki--laki",
    },
    {
        nama: "Adi Kesuma",
        nim: "105021832145",
        prodi: "Sistem Informasi",
        email: "adi@gmail.com",
        alamat: "Jl. Melati No. 11",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Siti Aisyah",
        nim: "105009876543",
        prodi: "Sistem Informasi",
        email: "siti@gmail.com",
        alamat: "Jl. Sudirman No. 7",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Sucipto",
        nim: "234561810006",
        prodi: "Teknik Informatika",
        email: "Sucipto@gmail.com",
        alamat: "Jl. Kembangan No. 13",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Megumi",
        nim: "105024563425",
        prodi: "Sistem Informasi",
        email: "megumi@gmail.com",
        alamat: "Jl. Cinta Asih No. 17",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Rudi Salim",
        nim: "105021810008",
        prodi: "Teknik Informatika",
        email: "rudi@gmail.com",
        alamat: "Jl. Kebun Raya Itera No. 8",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Nana",
        nim: "105021877765",
        prodi: "Sistem Informasi",
        email: "nana@gmail.com",
        alamat: "Jl. Mitra No. 87",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Elang",
        nim: "105021810010",
        prodi: "Teknik Informatika",
        email: "elang@gmail.com",
        alamat: "Jl. Bintaro Raya No. 67",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Agung Hapsah",
        nim: "105021675467",
        prodi: "Sistem Informasi",
        email: "agung@gmail.com",
        alamat: "Jl. Cinta Damai No. 42",
        jenis_kelamin: "Perempuan",
    }
];

// get element from id
let count_total_mhs = document.getElementById("count_total_mhs");
let count_total_mhs_laki = document.getElementById("count_laki_mhs");
let count_total_mhs_perempuan = document.getElementById("count_perempuan_mhs");
let count_si = document.getElementById("count_si");
let count_if = document.getElementById("count_if");
let table = document.getElementById("table-mhs");

// insert value to element
try {
    count_total_mhs.innerHTML = datamhs.length;
    count_total_mhs_laki.innerHTML = datamhs.filter(mhs => mhs.jenis_kelamin == "Laki-laki").length;
    count_total_mhs_perempuan.innerHTML = datamhs.filter(mhs => mhs.jenis_kelamin == "Perempuan").length;
    count_si.innerHTML = datamhs.filter(mhs => mhs.prodi == "Sistem Informasi").length;
    count_if.innerHTML = datamhs.filter(mhs => mhs.prodi == "Teknik Informatika").length;    
} catch (error) {
    // insert data to table
    for (let i = 0; i < datamhs.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${datamhs[i].nim}</td>
                <td>${datamhs[i].nama}</td>
                <td>${datamhs[i].jenis_kelamin}</td>
                <td>${datamhs[i].prodi}</td>
                <td>${datamhs[i].email}</td>
                <td>${datamhs[i].alamat}</td>
            </tr>
        `;
    }
}
