//TINH TIEN LUONG NHAN VIEN

var tinhLuong = document.getElementById("tinhLuong").onclick = function(){
    //INPUT ; nhap luong gio , so ngay lam
    var nhapLuong = 100000;
    var nhapNgay = document.getElementById("nhapNgay").value ;
    var total = 0;
    //XU LY: tinh tong , kiem tra input
        total = nhapLuong * nhapNgay;
    //OUT PUT: hien thi theo dung yeu cau
    document.getElementById("tongTinhLuong").innerHTML = total;
}


//TINH GIA TRI TRUNG BINH

var tinhTrungBinh = document.getElementById("tinhTrungBinh").onclick = function(){
    //INPUT: Nhap du lieu cac so thu
    var soMot = document.getElementById("soMot").value * 1;
    var soHai = document.getElementById("soHai").value * 1;
    var soBa = document.getElementById("soBa").value * 1;
    var soBon = document.getElementById("soBon").value * 1;
    var soNam = document.getElementById("soNam").value * 1;
    var tongSo = 0;
    var TTB = 0;
    //OUT PUT: Tinh trung binh 5 so thu 
    tongSo = soMot + soHai + soBa + soBon + soNam ;
    TTB = tongSo / 5;
    //XU LY: in ra footer theo dung yeu cau
    document.getElementById("ketQuaTB").innerHTML = TTB;
}

//QUY DOI TIEN USD SANG VND

var quyDoiTien = document.getElementById("quyDoiTien").onclick = function(){
    //IN PUT : Nhap gia tri so tien
    var nhapSoTien = document.getElementById("nhapSoTien").value * 1;
    var doiTien = 0;
    
    //OUT PUT: Quy doi tien USD sang VND
    doiTien = nhapSoTien * 23500;

    //FOMART VN
    var formattedDoiTien = new Intl.NumberFormat("vn-VN").format(doiTien);
    
    //XU LY : in ra footer theo yeu cau khi nhu USD => VND
    document.getElementById("footerDoiTien").innerHTML = formattedDoiTien;
}

//TINH DIEN TICH , CHU VI

var tinhCvDt = document.getElementById("tinhCvDt").onclick=function(){
    //XU LY: nhap chieu dai, chieu rong
    var chieuDai = document.getElementById("chieuDai").value *1;
    var chieuRong = document.getElementById("chieuRong").value *1;
    
    var chuVi = 0;
    var dienTich = 0;
    
    //OUT PUT: tinh chu vi , dien tich
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong
    
    //XU LY: in ra footer chu vi va dien tich
    document.getElementById("footerDienTich").innerHTML = dienTich;
    document.getElementById("footerChuVi").innerHTML = chuVi;
}

//TINH TONG 2 KY SO

var sumDigits = document.getElementById("sumDigits").onclick = function(){
    // input : nhap vao gia tri so
    var num = parseInt(document.getElementById("num").value *1);
    
    var num1 = num % 10;
    var num2 = Math.floor(num / 10);

    // xu ly: tinh tong 
    var sum = num1 + num2;

    // output : hien thi in ra footer
    document.getElementById("result").innerHTML = "Tong la: " + sum;
}


