let array = 'Try your best to type matching your m';
let new_content_array;

function change_content() {
    new_content_array='';
    let real_content = document.getElementById('content').value;
        if (real_content.length > 0) {
        for (let i = 0; i < real_content.length; i++) {
            new_content_array += array[i];
        }} if(real_content.length > array.length){
            new_content_array = "";
    }
    document.getElementById('content').value = new_content_array;
    new_content_array='';
    setTimeout("change_content()", 100)
}
