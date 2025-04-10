import infografis1 from "../assets/infografis/photo1.jpg";
import infografis10 from "../assets/infografis/photo10.png";
import infografis12 from "../assets/infografis/photo12.jpg";
import infografis13 from "../assets/infografis/photo13.jpg";
import infografis2 from "../assets/infografis/photo2.png";
import infografis3 from "../assets/infografis/photo3.jpg";
import infografis4 from "../assets/infografis/photo4.jpg";
import infografis5 from "../assets/infografis/photo5.jpg";
import infografis6 from "../assets/infografis/photo6.png";
import infografis7 from "../assets/infografis/photo7.png";
import infografis8 from "../assets/infografis/photo8.png";
import infografis9 from "../assets/infografis/photo9.png";
import irigasiKomering1 from "../assets/irigasiKomering/photo1.jpg";
import irigasiKomering2 from "../assets/irigasiKomering/photo2.jpg";
import irigasiKomering3 from "../assets/irigasiKomering/photo3.jpg";
import irigasiKomering4 from "../assets/irigasiKomering/photo4.jpg";

// import infografis11 from "../assets/infografis/photo11.jpg";


// import infografis14 from "../assets/infografis/photo14.jpg";













export const mockDataBendungan = {
  sections: [
    {
      title: "BENDUNGAN",
      items: [
        { label: "Tampungan Bruto NWL", value: "142,76 Juta m³ (+315,67 m)" },
        { label: "Tampungan Efektif", value: "96,22 Juta m³ (NWL-LWL)" },
        { label: "Tampungan Mati LWL", value: "46,54 Juta m³ (+288,55 m)" },
        { label: "Luas genangan", value: "577,12 Ha (+320,00 m)" },
        {
          label: "Tipe bendungan",
          value: "Urugan Batu dengan Zonal Inti Tegak",
        },
        { label: "Tinggi bendungan", value: "122,00 m" },
        { label: "Elevasi puncak bendungan", value: "+323,67 m" },
        { label: "Panjang puncak bendungan", value: "950,00 m" },
        { label: "Lebar puncak bendungan", value: "12,00 m" },
      ],
    },
    {
      title: "PELIMPAH",
      items: [
        { label: "Tipe Pelimpah", value: "Side Spillway Frontal Ogee" },
        { label: "Elevasi Puncak Mercu", value: "+315,67 m" },
        { label: "Lebar Bersih Pelimpah", value: "80,00 m" },
        { label: "Tipe Pintu", value: "Sliding Gate" },
        { label: "Lebar Pintu", value: "4,5 m" },
        { label: "Panjang Saluran Peluncur", value: "751,50 m" },
        { label: "Lebar Saluran Peluncur", value: "35,00 m" },
      ],
    },
    {
      title: "PENGELAK",
      items: [
        { label: "Tipe Saluran Pengelak", value: "Lingkaran Steel Lining" },
        { label: "Dimensi", value: "ø 7,00 m" },
        { label: "Panjang Terowongan", value: "596,80 m" },
        { label: "Q Pengelak", value: "910,7 m³/det (Q25)" },
      ],
    },
    {
      title: "PENGAMBILAN",
      items: [
        {
          label: "Tipe",
          value: "Intake Miring dengan Headrace Tunnel Beton dan Penstock Baja",
        },
        { label: "Elevasi Dasar", value: "+288,55 m" },
        { label: "Tipe Pintu", value: "Sliding Gate" },
        { label: "Dimensi Pintu", value: "5 m x 5 m" },
        { label: "Q Pengambilan", value: "37,40 m³/det" },
      ],
    },
    {
      title: "MANFAAT",
      items: [
        { label: "IRIGASI", value: "34.824 Ha" },
        { label: "AIR BAKU", value: "1 m³/det" },
        { label: "REDUKSI BANJIR", value: "39,5% Q50" },
        { label: "LISTRIK", value: "4 x 10 MW" },
        { label: "PARIWISATA", value: "" },
      ],
    },
    {
      title: "PEREDAM ENERGI",
      items: [
        { label: "Tipe Peredam Energi", value: "Ski Jump" },
        { label: "Jari-Jari Bucket", value: "30 m" },
        { label: "Elevasi Bucket", value: "+198,00 m" },
      ],
    },
    {
      title: "HIDROLOGI",
      items: [
        { label: "Luas DAS", value: "1.158,20 km²" },
        { label: "Q 1000", value: "1.310,60 m³/det" },
        { label: "Q PMF", value: "3.763,90 m³/det" },
      ],
    },
  ],
  paket: [
    {
      id: 1,
      kontrak: "Hutama Karya",
      ruang_lingkup:
        "Pekerjaan Persiapan, Bendungan Utama Kiri, Jetty dan Trashboom, Alat Penunjang OP, Soil Investigasi, dan Penanganan Alur Limbun.",
    },
    {
      id: 2,
      kontrak: "Waskita",
      ruang_lingkup:
        "Pekerjaan Persiapan, Bendungan Utama Kanan, dan Penyeldikan Lapangan Tambahan.",
    },
    {
      id: 3,
      kontrak: "Nindya Karya",
      ruang_lingkup:
        "Pekerjaan Persiapan, Jalan Masuk, Jalan Inspeksi dan Relokasi Jalan, Bangunan Pelimpah, Bangunan Fasilitas, Pekerjaan Lain-Lain.",
    },
    {
      id: 4,
      kontrak: "Wijaya Karya",
      ruang_lingkup:
        "Pekerjaan Persiapan, Bangunan Pengelak, Pekerjaan Drilling dan Grouting Bendungan, Bangunan Pengambilan, Hydromechanical and Electrical Works dan Pre-Grouting.",
    },
    {
      id: "SPV",
      kontrak: "Virama Karya",
      ruang_lingkup:
        "Kegiatan Supervisi Konstruksi, Biaya Langsung Personil & Non Personil",
    },
  ],
  timeline: {
    start: "16 OKTOBER 2018",
    end: "31 DESEMBER 2024",
    milestones: [
      { year: 2017, color: "bg-red-500" },
      { year: 2018, color: "bg-red-500" },
      { year: 2019, color: "bg-green-500" },
      { year: 2020, color: "bg-green-500" },
      { year: 2021, color: "bg-blue-500" },
      { year: 2022, color: "bg-blue-500" },
      { year: 2023, color: "bg-yellow-500" },
      { year: 2024, color: "bg-yellow-500" },
      { year: "2025/2026", color: "bg-purple-500" },
      { year: "Smt 1 2026", color: "bg-purple-500" },
    ],
  },
  photo: [
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/DJI_0061.JPG",
      description: "Photo Desc",
      date: "2024-08-26",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/DJI_0063.JPG",
      description: "Photo Desc",
      date: "2024-08-26",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/DJI_0064.JPG",
      description: "Photo Desc",
      date: "2024-08-26",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/DJI_0114.JPG",
      description: "Photo Desc",
      date: "2024-08-26",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/29.proyek-pembangunan-bendungan-tiga-dihaji.jpg",
      description: "Photo Desc",
      date: "2024-08-06",
    },
  ],
  video: [
    {
      url: "https://www.youtube.com/embed/tyoDidJS14w?si=LB4jT_9UmWQCz2ZW",
      title: "Dokumentasi Pembangunan Bendungan Tigadihaji Paket IV Kab OKU Selatan Desember 2024",
      date: "2024-12-27",
    },
    {
      url: "https://www.youtube.com/embed/jODW_3CXoNs?si=CpJx8KIiWUj4Zd52",
      title: "Dokumentasi Pelaksanaan Pembangunan Bendungan Tigadihaji Kab. Oku Selatan 2024",
      date: "2024-12-27",
    },
    {
      url: "https://www.youtube.com/embed/kbSiANA11As?si=lxseQaqZmPCwJSQi",
      title: "Video Kegiatan Pekerjaan Timbunan Urugan Batu Tubuh Bendungan Paket 1 & 2",
      date: "2024-08-12",
    },
    {
      url: "https://www.youtube.com/embed/qR6AMDZeOMY?si=DKIhcypeWRihuteI",
      title: "Video Kegiatan Pekerjaan Pembangunan Bendungan Tigadihaji Paket IV Kab. OKU Selatan",
      date: "2024-08-12",
    },
    {
      url: "https://www.youtube.com/embed/TPk8-3gTFOE?si=RqtspRtuSknnCz06",
      title: "Video Kegiatan Pekerjaan Timbunan Urugan Batu Tubuh Bendungan Paket 1 & 2",
      date: "2024-08-12",
    },
    {
      url: "https://www.youtube.com/embed/OuoFoOBcNZ4?si=2DuAHLHEPppgVSKO",
      title: "Video Kegiatan Pekerjaan Pembangunan Bendungan Tigadihaji Kab. OKU Selatan",
      date: "2024-07-30",
    },
    {
      url: "https://www.youtube.com/embed/PvyGkTamKrQ?si=QXivJOjFoGlPhmDI",
      title: "Video Kegiatan Pekerjaan Pembangunan Bendungan Tigadihaji Kab. OKU Selatan",
      date: "2024-08-12 2024-07-15",
    },
  ],
};

export const mockDataIrigasiLematang = {
  sections: [
    {
      title: "DAERAH IRIGASI LEMATANG",
      items: [
        { label: "Luas Baku", value: "3,000 ha" },
        { label: "Fungsional", value: "754 ha" },
        { label: "Potensial", value: "2,246 ha" },
      ],
    },
  ],
  phases: [
    {
      title: "PHASE I (2015 - 2019)",
      paket: [
        {
          label: "Paket I",
          details: [
            { label: "Bendung", value: "1 Bh" },
            {
              label: "Saluran Induk (Flume Terbangun)",
              value: "3,806.20 m",
            },
          ],
        },
      ],
    },
    {
      title: "PHASE II (2021 - 2024)",
      paket: [
        {
          label: "Paket I",
          details: [
            { label: "Flume Sal. Primer", value: "5,491.00 M" },
            { label: "Talang Air", value: "485.00 M (7 Bh)" },
            { label: "Bangunan Penguras", value: "700 Bh" },
          ],
        },
        {
          label: "Paket II",
          details: [
            { label: "Sal. Sekunder (5 Lokasi)", value: "34,430.00 M" },
            { label: "Bangunan", value: "15,800 Bh" },
          ],
        },
      ],
    },
  ],
  photo: [
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/42d0327ce309d379cb9205ed67edcf52.jpg",
      description: "Photo Desc",
      date: "2024-08-06",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+950.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+850.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+800.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+750.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+700.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+650.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+600.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+550.png",
      description: "Photo Desc",
      date: "2024-07-30",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+800.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+750.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+700.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+650.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+600.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+550.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+500.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+050.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+450.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+400.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+350.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+300.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+250.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+200.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+150.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+100.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+050.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%204+000.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+950.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+900.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+850.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+800.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+750.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+700.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+650.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+600.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+500.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+475.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+150.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+100.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%203+000.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+900.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+875.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+850.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+800.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+750.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+700.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+650.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+550.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+500.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+450.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+400.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+350.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+300.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+250.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+200.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+150.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+100.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+050.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%202+000.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+900.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+500.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+450.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+050.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%201+000.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+950.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+900.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+850.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+800.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+750.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+700.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+650.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+600.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+550.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+500.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+400.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+350.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+300.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+200.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/Talang%202.png",
      description: "Photo Desc",
      date: "2024-07-28",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/Jembatan%20Talang%204.jpeg",
      description: "Photo Desc",
      date: "2024-07-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/Jembatan%20Talang%205.jpeg",
      description: "Photo Desc",
      date: "2024-07-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/Jembatan%20Talang%206.jpeg",
      description: "Photo Desc",
      date: "2024-07-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+050.JPG",
      description: "Photo Desc",
      date: "2024-07-23",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/Sta%200+000.JPG",
      description: "Photo Desc",
      date: "2024-07-23",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/Talang%201.JPG",
      description: "Photo Desc",
      date: "2024-07-14",
    },
  ],
  video: [
    {
      url: "https://www.youtube.com/embed/LNXSnvksqwc?si=6I3NHEgz4gtMG6Rn",
      title: "Dokumentasi Daerah Irigasi Lematang Februari 2025",
      date: "2025-02-3",
    },
    {
      url: "https://www.youtube.com/embed/psCAI2i2-zI?si=kqDtp4QkDS0BUkmU",
      title: "Video Kegiatan Pekerjaan DI Lematang Phase II Paket II Saluran Sekunder Plang Kenidai",
      date: "2024-08-21",
    },
    {
      url: "https://www.youtube.com/embed/3nt4JL6jcHw?si=_8hGDZ0X9PEtVUXH",
      title: "Video Kegiatan Pekerjaan DI Lematang Saluran Sekunder Salipaya Phase II Paket II",
      date: "2024-08-21",
    },
    {
      url: "https://www.youtube.com/embed/0ECxm-W7iRo?si=hTRWL1jaIstxL9Lf",
      title: "Video Kegiatan Pekerjaan DI Lematang Phase II Paket II Saluran Sekunder Jokoh Utama",
      date: "2024-08-20",
    },
    {
      url: "https://www.youtube.com/embed/cNm2_4FwyA8?si=uQxc82TUbGXP82yg",
      title: "Video Kegiatan Pekerjaan DI Lematang Phase II Paket II Saluran Sekunder jokoh kanan",
      date: "2024-08-20",
    },
    {
      url: "https://www.youtube.com/embed/1KiWLk1e8dc?si=sF51l6eqYxbH5rLl",
      title: "Video Kegiatan Pekerjaan DI Lematang Saluran Sekunder Saluran sekunder Salipayah",
      date: "2024-08-13",
    },
    {
      url: "https://www.youtube.com/embed/k-d-PLrp4OY?si=5rjoZsDRa5gJuTbl",
      title: "Video Kegiatan Pekerjaan DI Lematang Phase II Paket II Saluran Sekunder jokoh kanan",
      date: "2024-08-13",
    },
    {
      url: "https://www.youtube.com/embed/JgTnEbMpcMY?si=gFspFD4H8iqAmqVJ",
      title: "Video Kegiatan Pekerjaan Pembangunan Jaringan Irigasi D I Lematang Phase II Paket 1",
      date: "2024-07-25",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/WhatsApp%20Video%202024-08-19%20at%2013.39.09.mp4",
      title: "Video kegiatan pekerjaan",
      date: "2024-08-16",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/WhatsApp%20Video%202024-08-14%20at%2012.36.18.mp4",
      title: "Video kegiatan pekerjaan",
      date: "2024-07-01",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/WhatsApp%20Video%202024-08-13%20at%2021.05.50.mp4",
      title: "Video kegiatan pekerjaan",
      date: "2024-07-01",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/WhatsApp%20Video%202024-08-13%20at%2021.05.50%20(1).mp4",
      title: "Video kegiatan pekerjaan",
      date: "2024-07-01",
    },
  ],
};

export const mockDataIrigasiKomering = {
  sections: [
    {
      title: "KOMERING IRRIGATION PROJECT",
      items: [
        {
          label: "Package 1",
          value:
            "Perjaya Headworks, Komering Main Canal, Lempuing Sec Canal (Sec-3), Lempuing Sub-Sec Canal and Tertiary Development (Block G and H), Telemetry System",
        },
        {
          label: "Package 1 Status",
          value:
            "Repeated bid as only 1 Applicant passing the PQ, Status as of June 25 2024 in BP2JK for tendering",
        },
      ],
    },
  ],
  phases: [
    {
      title: "PHASE III (2021 - 2024)",
      paket: [
        {
          label: "Package 2",
          details: [
            {
              label: "Description",
              value:
                "Belitang Secondary Canal (BB.0-BB.15), Lempuing Sec and Sub-Sec Canal and Tertiary Development (Block I and J)",
            },
            {
              label: "Progress s.d 01 Juli 2024 - SYC",
              value:
                "Renc. Fisik: 33.995%, Renc. Keu: 0%, Rea. Fisik: 63.43%, Rea. Keu: 0%, Deviasi: -27.652%, Deviasi: 0%",
            },
            {
              label: "Progress s.d 01 Juli 2024 - MYC",
              value:
                "Renc. Fisik: 64.61%, Renc. Keu: 15.00%, Rea. Fisik: 12.05%, Rea. Keu: 15.00%, Deviasi: -52.55%, Deviasi: 0%",
            },
          ],
        },
        {
          label: "Package 3",
          details: [
            {
              label: "Description",
              value:
                "Belitang Secondary Canal (BB.15-BB.25), Lempuing Sec and Sub-Sec Canal and Tertiary Development (Block K)",
            },
            {
              label: "Progress s.d 01 Juli 2024 - SYC",
              value:
                "Renc. Fisik: 8.67%, Renc. Keu: 86.01%, Rea. Fisik: 3.03%, Rea. Keu: 86.01%, Deviasi: -5.65%, Deviasi: 0%",
            },
            {
              label: "Progress s.d 01 Juli 2024 - MYC",
              value:
                "Renc. Fisik: 1.51%, Renc. Keu: 15.00%, Rea. Fisik: 0.53%, Rea. Keu: 15.00%, Deviasi: -0.98%, Deviasi: 0%",
            },
          ],
        },
        {
          label: "Package 4",
          details: [
            { label: "Description", value: "Procurement of OM Equipment" },
            {
              label: "Package 4 Status",
              value: "Penggadaan menggunakan E-Katalog (Menunggu Revisi DIPA)",
            },
          ],
        },
      ],
    },
  ],
  photo: [
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0191.JPG",
      description: "Bendung Perjaya",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0198.JPG",
      description: "Bendung Perjaya",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0202.JPG",
      description: "Bendung Perjaya",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0204.JPG",
      description: "Bendung Perjaya",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0207.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0323.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0324.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0332.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0335.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0338.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0340.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0346.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/DJI_0348.JPG",
      description: "Package II",
      date: "2024-08-27",
    },
    {
      url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/dikeringkan.jpg",
      description: "Bendung Perjaya",
      date: "2024-08-06",
    },
  ],
  video: [
    {
      url: "https://www.youtube.com/embed/6DeVoMI8_68?si=FHvG1DdPkvviUfWR",
      title: "Video Kegiatan Pekerjaan Komering Irrigation Project Paket 2",
      date: "2024-08-19",
    },
    {
      url: "https://www.youtube.com/embed/lB_I07T6vKM?si=zRp-ERcfTV6706DO",
      title: "Video Kegiatan Pekerjaan Komering Irrigation Project Paket 3 Blok K Belitang",
      date: "2024-07-29",
    },
  ],
};

export const getMockData = (id: string) => {
  if (id === "1") {
    return mockDataIrigasiLematang;
  } else if (id === "2") {
    return mockDataIrigasiKomering;
  } else {
    return mockDataBendungan;
  }
};

const photoGallery = [
  {
    url: irigasiKomering1,
    description: "Photo Desc",
    date: "2024-08-06", // Updated to YYYY-MM-DD
  },
  {
    url: irigasiKomering2,
    description: "Photo Desc",
    date: "2024-08-06",
  },
  {
    url: irigasiKomering3,
    description: "Photo Desc",
    date: "2024-08-06",
  },
  {
    url: irigasiKomering4,
    description: "Photo Desc",
    date: "2024-08-06",
  },
];

const videoGallery = [
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/DJI_0796.MP4",
    title: "Video kegiatan pekerjaan",
    date: "2024-07-01", // Updated to YYYY-MM-DD
  },
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/update%20drone%20view%20per%2025%20Juli.mp4",
    title: "Video kegiatan pekerjaan",
    date: "2024-07-25",
  },
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/BELITANG%2029%20JULI.mp4",
    title: "Video kegiatan pekerjaan",
    date: "2024-07-29",
  },
  // {
  //   url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/video1.mp4",
  //   title: "Video kegiatan pekerjaan",
  //   date: "2024-08-06",
  // },
  // Other video objects...
];

const infografisGallery = [
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/WhatsApp%20Image%202024-08-13%20at%2014.43.04.jpeg",
    description: "Infografis Desc",
    date: "2024-08-06", // Updated to YYYY-MM-DD
  },
  {
    url: infografis1,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis2,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis3,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis4,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis5,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis6,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis7,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis8,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis9,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis10,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  // {
  //   url: infografis11,
  //   description: "Infografis Desc",
  //   date: "2024-08-06",
  // },
  {
    url: infografis12,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  {
    url: infografis13,
    description: "Infografis Desc",
    date: "2024-08-06",
  },
  // {
  //   url: infografis14,
  //   description: "Infografis Desc",
  //   date: "2024-08-06",
  // },
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/image/WhatsApp%20Image%202024-08-13%20at%2014.43.04.jpeg",
    description: "Infografis Desc",
    date: "2024-08-06",
  },
];

export const getInfoGrafis = () => {
  return infografisGallery;
};

export const getPhotoGallery = () => {
  return photoGallery;
};

export const getVideoGallery = () => {
  return videoGallery;
};
