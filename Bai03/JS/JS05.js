
class TaiKhoanNganHang {
  constructor() {
    this.soDu = 0;
  }
  guiTien(soTien) {
    this.guiTien = soTien;
  }
  rutTien(soTien) {
    this.rutTien = soTien;
  }
  kiemTraSoDu() {
    return (this.soDu = this.guiTien - this.rutTien);
  }

}
// Ví dụ sử dụng
const taiKhoan = new TaiKhoanNganHang();
taiKhoan.guiTien(1000);
taiKhoan.rutTien(200);
console.log(taiKhoan.kiemTraSoDu()); // Kết quả: 800
