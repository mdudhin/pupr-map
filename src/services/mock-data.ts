import infografis1 from "../assets/infografis/photo1.jpg";
import infografis10 from "../assets/infografis/photo10.png";
import infografis11 from "../assets/infografis/photo11.jpg";
import infografis12 from "../assets/infografis/photo12.jpg";
import infografis13 from "../assets/infografis/photo13.jpg";
import infografis14 from "../assets/infografis/photo14.jpg";
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
  // photo: [
  //   bendungan1,
  //   bendungan2,
  //   bendungan3,
  //   bendungan4,
  //   bendungan5,
  //   bendungan6,
  //   bendungan7,
  //   bendungan8,
  // ],
  photo: [
    {
      src: "https://drive.google.com/drive/folders/1J8FGQpzQqUwkltSWl6CmTFQJ2hhyL8nJ",
      description: "1 Agustus 2024",
    },
    {
      src: "https://drive.google.com/drive/folders/1y2imBC28u6B0YP8jddWO4-4ivnU_vL1z",
      description: "1 Juli 2024",
    },
  ],
  // video: [
  //   {
  //     thumbnail: bendungan1,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  //   {
  //     thumbnail: bendungan2,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  //   {
  //     thumbnail: bendungan3,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  //   {
  //     thumbnail: bendungan4,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  //   {
  //     thumbnail: bendungan5,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  //   {
  //     thumbnail: bendungan6,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  // ],
  video: [
    {
      src: "https://drive.google.com/drive/folders/1EOLQtkpgceCD9jUp5mmSFDckmuK7XWMi",
      description: "1 Agustus 2024",
    },
    {
      src: "https://drive.google.com/drive/folders/1qtkOQvUPxbGFYR8UqnWlh6xZ0P56xg3W",
      description: "1 Juli 2024",
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
  // photo: [
  //   irigasiLematang1,
  //   irigasiLematang2,
  //   irigasiLematang3,
  //   irigasiLematang4,
  //   irigasiLematang5,
  //   irigasiLematang6,
  //   irigasiLematang7,
  //   irigasiLematang8,
  // ],
  photo: [
    {
      src: "https://drive.google.com/drive/folders/1J8FGQpzQqUwkltSWl6CmTFQJ2hhyL8nJ",
      description: "1 Agustus 2024",
    },
    {
      src: "https://drive.google.com/drive/folders/1y2imBC28u6B0YP8jddWO4-4ivnU_vL1z",
      description: "1 Juli 2024",
    },
  ],
  // video: [
  //   {
  //     thumbnail: irigasiLematang1,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  // ],
  video: [
    {
      src: "https://drive.google.com/drive/folders/1EOLQtkpgceCD9jUp5mmSFDckmuK7XWMi",
      description: "1 Agustus 2024",
    },
    {
      src: "https://drive.google.com/drive/folders/1qtkOQvUPxbGFYR8UqnWlh6xZ0P56xg3W",
      description: "1 Juli 2024",
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
      title: "PHASE I (2021 - 2024)",
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
  // photo: [
  //   irigasiKomering1,
  //   irigasiKomering2,
  //   irigasiKomering3,
  //   irigasiKomering4,
  // ],
  photo: [
    {
      src: "https://drive.google.com/drive/folders/1J8FGQpzQqUwkltSWl6CmTFQJ2hhyL8nJ",
      description: "1 Agustus 2024",
    },
    {
      src: "https://drive.google.com/drive/folders/1y2imBC28u6B0YP8jddWO4-4ivnU_vL1z",
      description: "1 Juli 2024",
    },
  ],
  // video: [
  //   {
  //     thumbnail: irigasiKomering1,
  //     url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //     title: "Video kegiatan pekerjaan 31 Juli 2024",
  //   },
  // ],
  video: [
    {
      src: "https://drive.google.com/drive/folders/1EOLQtkpgceCD9jUp5mmSFDckmuK7XWMi",
      description: "1 Agustus 2024",
    },
    {
      src: "https://drive.google.com/drive/folders/1qtkOQvUPxbGFYR8UqnWlh6xZ0P56xg3W",
      description: "1 Juli 2024",
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
    date: "6 Agustus 2024",
  },
  {
    url: irigasiKomering2,
    description: "Photo Desc",
    date: "6 Agustus 2024",
  },
  {
    url: irigasiKomering3,
    description: "Photo Desc",
    date: "6 Agustus 2024",
  },
  {
    url: irigasiKomering4,
    description: "Photo Desc",
    date: "6 Agustus 2024",
  },
];

const videoGallery = [
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/video1.mp4",
    title: "Video kegiatan pekerjaan",
    date: "6 Agustus 2024",
  },
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/video1.mp4",
    title: "Video kegiatan pekerjaan",
    date: "6 Agustus 2024",
  },
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/video1.mp4",
    title: "Video kegiatan pekerjaan",
    date: "6 Agustus 2024",
  },
  {
    url: "https://mediabbwssviii.sgp1.cdn.digitaloceanspaces.com/video/video1.mp4",
    title: "Video kegiatan pekerjaan",
    date: "6 Agustus 2024",
  },
  // {
  //   thumbnail: bendungan2,
  //   url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //   title: "Video kegiatan pekerjaan",
  //   date: "6 Agustus 2024",
  // },
  // {
  //   thumbnail: bendungan3,
  //   url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //   title: "Video kegiatan pekerjaan",
  //   date: "6 Agustus 2024",
  // },
  // {
  //   thumbnail: bendungan4,
  //   url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //   title: "Video kegiatan pekerjaan",
  //   date: "6 Agustus 2024",
  // },
  // {
  //   thumbnail: bendungan5,
  //   url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //   title: "Video kegiatan pekerjaan",
  //   date: "6 Agustus 2024",
  // },
  // {
  //   thumbnail: bendungan6,
  //   url: "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view",
  //   title: "Video kegiatan pekerjaan",
  //   date: "6 Agustus 2024",
  // },
];

const infografisGallery = [
  {
    url: infografis1,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis2,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis3,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis4,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis5,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis6,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis7,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis8,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis9,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis10,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis11,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis12,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis13,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
  },
  {
    url: infografis14,
    description: "Infografis Desc",
    date: "6 Agustus 2024",
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
