document.addEventListener('DOMContentLoaded', () => {
    const coupons = document.querySelectorAll('.coupon');
    const note = document.getElementById('note');

    coupons.forEach(coupon => {
        coupon.addEventListener('click', () => {
            if (!coupon.classList.contains('used')) {
                const noteText = coupon.getAttribute('data-note');
                note.textContent = noteText;
                note.style.display = 'block';
                coupon.classList.add('used');
            }
        });
    });

    note.addEventListener('click', () => {
        note.style.display = 'none';
    });
});
