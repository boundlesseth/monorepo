let SEED;
try {
    var rawQuery = document.location.search;
    var searchResult = /^\?seed=([a-f0-9]*)/.exec(document.location.search);
    SEED = searchResult[1];
} catch (e) {
    console.log(e)
}