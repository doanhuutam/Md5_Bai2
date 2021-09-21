function fibonaci(a, b, count) {
    if (count > 10) {
        return;
    }
    else {
        console.log(a);
        fibonaci(b, a + b, ++count);
    }
}
fibonaci(1, 1, 0);
