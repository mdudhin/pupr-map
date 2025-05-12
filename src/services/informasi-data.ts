import peraturanPdf1 from "../assets/informasi-publik/4. Lampiran Form Aspek Pengedalian Daya Rusak.pdf";

export interface Peraturan {
  id: number;
  title: string;
  file: any;
}

export const tab1 = [
  {
    id: 1,
    title:
      "Peraturan Presiden Nomor 139 Tahun 2024 tentang Penataan Tugas dan Fungsi Kementerian Negara Kabinet Merah Putih Periode Tahun 2024-2029",
    file: peraturanPdf1,
  },
  {
    id: 2,
    title:
      "Peraturan Presiden Nomor 139 Tahun 2024 tentang Penataan Tugas dan Fungsi Kementerian Negara Kabinet Merah Putih Periode Tahun 2024-2029",
    file: peraturanPdf1,
  },
];

export const tab2 = [
  {
    id: 1,
    title: "TAB 2",
    file: peraturanPdf1,
  },
  {
    id: 2,
    title: "TAB 2",
    file: peraturanPdf1,
  },
];
