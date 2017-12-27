var get_wiki_summary = (query, _function) => $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
        action: 'query',
        format: 'json',
        titles: query,
        prop: 'extracts',
    },
    dataType: 'jsonp',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    jsonpCallback: _function.name
});

var cb_for_jsonp = function(data) {
    console.log(data)
}

get_wiki_summary('Elton John', cb_for_jsonp)