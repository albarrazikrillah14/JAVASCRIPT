addEventListener("message", function(meesage) {
    const total = meesage.data;

    for(let i = 0; i < total; i++) {
        this.postMessage(i); // sama seperti fungsi return
    }
});