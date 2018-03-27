let timer = null;

export const debounce =  function (fn, wait) {
    return function () {
        let context = this
        let args = arguments
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
}