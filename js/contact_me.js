<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var form = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/sendEmail"); // 后端邮件发送API的地址
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
    if (xhr.status === 200) {
    alert("邮件发送成功！");
} else {
    alert("邮件发送失败！");
}
};
    xhr.send(new URLSearchParams(form).toString());
});
</script>