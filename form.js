function terimainput(){
  var x=document.getElementById("saran").nama.value;
  var y=document.getElementById("saran").email.value;
  var z=document.getElementById("saran").judulweb.value;
  var a=document.getElementById("saran").komentar.value;

  if (x=="") {
    alert("Nama Wajib diisi");
    alert("Data gagal dikirim");
    return false;
  }
  if (y==""){
    alert("Email Wajib diisi");
    alert("Data gagal dikirim");
    return false;
  }

  alert("Komentar berhasil dikirim");

}
