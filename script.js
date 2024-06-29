document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accessCode = document.getElementById('accessCode').value;
    const validCodes = ['151121', '010612', '91011','51144','7118','81155'
        ,'5441','47221','75133','41355','4773','47328','47376','473811'
        ,'473812','473813','473814','473815','473816','473817',

    ]; // الأرقام الصحيحة التي يجب إدخالها
    const usedCodes = JSON.parse(localStorage.getItem('usedCodes')) || []; // الأرقام التي تم استخدامها

    if (usedCodes.includes(accessCode)) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'هذا الرقم تم استخدامه من قبل. حاول رقمًا آخر.';
        errorMessage.style.display = 'block';
    } else if (validCodes.includes(accessCode)) {
        usedCodes.push(accessCode);
        localStorage.setItem('usedCodes', JSON.stringify(usedCodes)); // تحديث الأرقام المستخدمة في Local Storage
        window.location.href = 'index1.html'; // توجيه المستخدم إلى صفحة الترحيب
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'الرقم الذي أدخلته غير صحيح. حاول مرة أخرى.';
        errorMessage.style.display = 'block';
    }
});
