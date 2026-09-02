const button = document.getElementById('clickBtn');
const output = document.getElementById('output');

let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        output.textContent = "Tuyệt vời! JavaScript hoạt động thành công! 🎉";
    } else {
        output.textContent = `Bạn đã bấm ${clickCount} lần! 🚀`;
    }
});