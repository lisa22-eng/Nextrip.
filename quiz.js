function saveAnswer(key, value, nextPage) {
    localStorage.setItem(key, value);
    window.location.href = nextPage;
}
