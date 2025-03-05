let n = parseInt(prompt("Nhap vao"));
for(let i =0; i<Math.abs(n);i++){
    if(n%i==0){
        console.log(i);
    }
}