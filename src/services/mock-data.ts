export const mockData = {
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
      kontrak: "1.077.580.618.000,-",
      ruang_lingkup:
        "Pekerjaan Persiapan, Bendungan Utama Kiri, Jetty dan Trashboom, Alat Penunjang OP, Soil Investigasi, dan Penanganan Alur Limbun.",
    },
    {
      id: 2,
      kontrak: "1.345.921.604.000,-",
      ruang_lingkup:
        "Pekerjaan Persiapan, Bendungan Utama Kanan, dan Penyeldikan Lapangan Tambahan.",
    },
    {
      id: 3,
      kontrak: "647.477.400.000,-",
      ruang_lingkup:
        "Pekerjaan Persiapan, Jalan Masuk, Jalan Inspeksi dan Relokasi Jalan, Bangunan Pelimpah, Bangunan Fasilitas, Pekerjaan Lain-Lain.",
    },
    {
      id: 4,
      kontrak: "690.714.005.000,-",
      ruang_lingkup:
        "Pekerjaan Persiapan, Bangunan Pengelak, Pekerjaan Drilling dan Grouting Bendungan, Bangunan Pengambilan, Hydromechanical and Electrical Works dan Pre-Grouting.",
    },
    {
      id: "SPV",
      kontrak: "90.138.000.000,-",
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
};

export const mockData1 = `<p style="line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px;"><strong>DAERAH IRIGASI
LEMATANG</strong></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Daerah irigasi lematang
merupakan areal persawahan yang berada disebelah kiri aliran Sungai Lematang dengan luas baku 3.000
ha, yang terdiri dari ± 754 ha (fungsional) sawah tadah hujan sedangkan
selebihnya ± 2.246 ha (potensial) berupa semak belukar dan kebun kopi.</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>A. PHASE&nbsp; I
TH. 2015 - 2019</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">1) Bendung&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 1 Bh</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">2) Saluran Induk&nbsp;
(Flume Terbangun)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 3.806,20
m</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>B. PHASE II TH. 2021 - 2024</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>PAKET I</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;&nbsp; 1) Flume Sal.
Primer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp;&nbsp; 5..491,00 M</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;&nbsp; 2) Talang
Air&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 485,00 M (7 Bh)</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;&nbsp; 3) Bangunan
Penguras&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7,00 Bh</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>PAKET II</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;&nbsp; 1)&nbsp; Sal. Sekunder (5 Lokasi)&nbsp; =&nbsp;
34.430,00 M</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;&nbsp; 2)&nbsp; Bangunan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 158,00 Bh</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px;"><strong>Pembangunan
Jaringan Irigasi D.I Lematang Kota Pagaralam Phase II Paket I (MYC)</strong></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>PROGRES S.D
01 JULI 2024 - SYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Renc. Fisik : 74,34 %&nbsp;&nbsp;&nbsp; Renc Keu, : 49,60 %</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Rea. Fisik &nbsp; : 75,14 %&nbsp;&nbsp;&nbsp; Rea Keu. &nbsp;&nbsp; : 49,60 %</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 0,79% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 0,00%</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>PROGRES S.D
01 JULI 2024 - MYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Renc. Fisik : 52,65%&nbsp;&nbsp;&nbsp;&nbsp; Renc Keu, : 52,45%</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Rea. Fisik &nbsp; : 54,62%&nbsp;&nbsp;&nbsp;&nbsp; Rea Keu. &nbsp;&nbsp; : 45,76%</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1,97% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : -6,88%</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong style="font-size: 18px;">Pembangunan Jaringan Irigasi D.I Lematang Kota
Pagaralam Phase II Paket II (MYC)</strong></span></p>
<p><img><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p class="MsoNormal"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Progres s.d 01 Juli 2024 - SYC</strong></span></p>

<p class="MsoNormal"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Renc. Fisik : 65,08%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Renc Keu, &nbsp; : 46,07%</span></p>

<p class="MsoNormal"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Rea. Fisik &nbsp;&nbsp; : 67,72%&nbsp;&nbsp;&nbsp;&nbsp; Rea Keu. &nbsp;&nbsp;&nbsp; : 46,07%</span></p>

<p class="MsoNormal"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 2,64% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 0,00%</span></p><p class="MsoNormal"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Progres s.d 01 Juli 2024 - MYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Renc. Fisik : 52,09%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Renc Keu, &nbsp; : 49,36%</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Rea. Fisik &nbsp;&nbsp; : 52.28%&nbsp;&nbsp;&nbsp;&nbsp; Rea Keu. &nbsp;&nbsp;&nbsp; : 49,36%</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 0,34% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Deviasi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 0,00%</span></p>
`;

export const mockData3 = `<p><strong style="font-size: 18px;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px;">BENDUNGAN
TIGA DIHAJI</span></strong></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif;"><strong style="font-size: 14px;">BENDUNGAN</strong></span></p>

 <ul style="list-style-type: circle;"><li><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tampungan
     Bruto NWL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 142,76 Juta
     m³ (+315,67 m)</span</li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tampungan Efektif&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 96,22 Juta
     m³ (NWL-LWL)</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tampungan Mati LWL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 46,54 Juta
     m³ (+288,55 m)</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Luas
     genangan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 577,12Ha
     (+320,00 m)</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe
     bendungan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Urugan Batu dengan Zonal Inti Tegak</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tinggi
     bendungan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 122,00 m</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Elevasi puncak bendungan&nbsp;&nbsp;&nbsp; :
     +323,67 m</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Panjangpuncak bendungan&nbsp; :
     950,00 m</span></li><li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Lebar
     puncak bendungan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :12,00 m</span></li></ul>
 
 
 
 


 
 
 
 

<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;<br></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif;"><strong style="font-size: 14px;">PENGELAK</strong></span></p>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe
     Saluran Pengelak&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : LingkaranSteel Lining</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Dimensi
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ø 7,00 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Panjang Trowongan&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 596,80 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Q Pengelak&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 910,7 m³/det (Q25)</span></li>
</ul>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">&nbsp;<br></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif;"><strong style="font-size: 14px;">PENGAMBILAN</strong></span></p>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Intake Miring dengan Headrace Tunnel
     &nbsp;Beton
     dan Penstock Baja</span></li>
</ul>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Elevasi
     Dasar&nbsp; : +288,55 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe Pintu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
     Sliding Gate</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Dimensi Pintu: 5 m X 5m</span></li>
</ul>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Q Pengambilan: 37,40 m³/det</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif;"><strong style="font-size: 14px;">PELIMPAH</strong></span></p>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe
     Pelimpah&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Side Spillway&nbsp; Frontal Ogee </span></li>
</ul>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Elevasi
     Puncak Mercu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +315,67 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Lebar
     Bersih Pelimpah&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 80,00 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe Pintu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Sliding Gate</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Lebar Pintu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 4,5 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Panjang Saluran Peluncur&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 751,50 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Lebar Saluran Peluncur&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
     35,00 m</span></li>
</ul>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">PEREDAM ENERGI</span></p>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Tipe
     Peredam Energi&nbsp; : Ski Jump</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Jari-Jari Bucket&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 30 m</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Elevasi Bucket &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +198,00 m</span></li>
</ul>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">HIDROLOGI</span></p>
<ul>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Luas
     DAS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1.158,20 &nbsp;km²</span></li>
 <li><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Q
     1000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1.310,60 m³/det</span></li>
</ul>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Q PMF&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 3.763,90 m³/det</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif;"><strong style="font-size: 14px;">MANFAAT</strong></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">IRIGASI
34.824 Ha</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">AIR
BAKU 1 m³/det</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">REDUKSI
BANJIR 39,5% Q50</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">LISTRIK
4 x 10 MW</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">PARIWISATA</span></p><p><br></p><table style="border-collapse:collapse;width: 100%;"><tbody>
<tr>
	<td style="width: 3.76266%;"><br></td>
	<td style="width: 35.3835%; text-align: center;">PAKET</td>
	<td style="width: 60.7815%; text-align: center;"><span>RUANG LINGKUP
PEKERJAAN</span><br></td></tr>
<tr>
	<td>1</td>
	<td>HUTAMAKARYA</td>
	<td><span>Pekerjaan Persiapan,
Bendungan Utama Kiri, Jetty dan Trashboom,<span>&nbsp;
</span>Alat Penunjang OP, Soil Investigasi, dan Penanganan Alur Limbun.</span><br></td></tr>
<tr>
	<td>2</td>
	<td>WASKITA</td>
	<td><p><span>Pekerjaan Persiapan, Bendungan
Utama Kanan, dan Penyelidikan Lapangan Tambahan.</span></p><br></td></tr>
<tr>
	<td>3</td>
	<td>NINDYA</td>
	<td><p><span>Pekerjaan Persiapan, Jalan Masuk,
Jalan Inspeksi dan Relokasi Jalan, Bangunan Pelimpah, Bangunan Fasilitas, Pekerjaan
Lain-Lain.</span></p><br></td></tr>
<tr>
	<td>4</td>
	<td>WIKA</td>
	<td><p><span>Pekerjaan Persiapan, Bangunan
Pengelak, Pekerjaan Drilling dan Grouting Bendungan, Bangunan Pengambilan,
Hydromechanical and Electrical Works dan Pre-Grouting.</span></p><br></td></tr>
<tr>
	<td>5</td>
	<td>VIRAMA KARYA</td>
	<td><p><span>Kegiatan Supervisi Konstruksi.
Biaya Langsung Personil &amp; Non Personil</span></p><br></td></tr></tbody></table>`;

export const mockData2 = `<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px;"><strong>DAERAH IRIGASI KOMERING</strong></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 18px;"><strong><br></strong></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Package 1 Perjaya
Headworks, Komering Main Canal, Lempuing Sec Canal (Sec-3), Lempuing Sub-Sec
Canal and Tertiary Development (Block G and H) and Telemetry System</span></p><p><br></p><p><span style="font-family: Arial, Helvetica, sans-serif;"><strong>Project Status</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Package 1 :<span>&nbsp;
</span>Repeated bid as only 1 Applicant passing the PQ , Project Status June,
25, 2024 in BP2JK for tendering</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Package 2 : Belitang Secondary Canal (BB.0-BB.15),
Lempuing Sec and Sub-Sec Canal and Tertiary Development (Block I and J)</span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Progres s.d 01 Juli 2024 - SYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Renc. Fisik : </span><span>33,995</span><span>%</span><span>Renc Keu, : 0,00%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Rea. Fisik </span><span><span>&nbsp; </span></span><span>: </span><span>6,343</span><span>%</span><span><span>&nbsp;&nbsp;&nbsp; </span></span><span>Rea Keu. </span><span><span>&nbsp;&nbsp; </span></span><span>: 0,00%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Deviasi </span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>-27,652</span><span>%</span><span> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Deviasi </span><span><span>&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: 0,00%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>&nbsp;</span><br></span></p>

<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Progres s.d 01 Juli 2024 - MYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Renc. Fisik : </span><span>6,461</span><span>%</span><span><span>&nbsp;&nbsp; </span></span><span>Renc Keu, </span><span>: </span><span>15</span><span>,00%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Rea. Fisik </span><span><span>&nbsp; </span></span><span>: </span><span>1,205</span><span>%</span><span><span>&nbsp;&nbsp;&nbsp; </span></span><span>Rea Keu. </span><span><span>&nbsp;&nbsp; </span></span><span>: </span><span>15</span><span>,00%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Deviasi </span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>-5,255</span><span>%</span><span> <span>&nbsp; </span></span><span>Deviasi </span><span><span>&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: 0,00%</span></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span><br></span></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Package 3 : Belitang Secondary Canal (BB.15-BB.25), Lempuing Sec and Sub-Sec Canal and
Tertiary Development (Block K); Sumatera Selatan; Kab. Ogan Komering Ilir; 4.43
Km; 687.5 Hektar; F; K; MYC</span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong><span>&nbsp;</span></strong><br></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Progres s.d 01 Juli 2024 - SYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Renc. Fisik <span>&nbsp;&nbsp; </span>: </span><span>8,67
</span><span>%</span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Renc
Keu, </span><span><span>&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>86,01
</span><span>%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Rea. Fisik </span><span><span>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>3,03
</span><span>%</span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Rea Keu.
</span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>86,01
</span><span>%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Deviasi </span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>-5,65
</span><span>%</span><span> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Deviasi </span><span><span>&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>0 </span><span>%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong><span>&nbsp;</span></strong><br></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Progres s.d 01 Juli 2024 - MYC</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Renc. Fisik<span>&nbsp;&nbsp;&nbsp; </span> : </span><span>1,51
</span><span>%</span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Renc
Keu, </span><span><span>&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>15,00
</span><span>%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Rea. Fisik </span><span><span>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>0,53
</span><span>%</span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Rea Keu.
</span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>15,00
</span><span>%</span></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span>Deviasi </span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>-0,98 </span><span>%</span><span> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>Deviasi </span><span><span>&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span>: </span><span>0 </span><span>%</span></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><span><br></span></span></p><p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Package 4 Procurement of OM Equipment</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;"><strong>Project Status</strong></span></p>
<p><span style="font-family: Arial, Helvetica, sans-serif; font-size: 14px;">Package 4 :<span>&nbsp;
</span>Penggadaan menggunakan E-Katalog (Menunggu Revisi DIPA)</span></p>`;
