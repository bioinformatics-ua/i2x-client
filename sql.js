{
    "server": {
        "name": "i2x",
        "host": "http://localhost:3000/",
        "api_key": "611a390a93d91c4296a339742dfe63c7"
    },
    "agents": [{
        "identifier": "sql",
        "publisher": "sql",
        "schedule": "2d",
        "seed": {
            "publisher": "csv",
            "uri": "http://pedrolopes.net/i2x/log.csv",
            "headers": true,
            "delimiter": ",",
            "selectors": [{
                "gene": "1"
            }]
        },
        "payload": {
            "server": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "telematica",
            "database": "i2x",
            "query": "SELECT * FROM variants WHERE gene LIKE '%{gene}';",
            "cache": "id",
            "selectors": [{
                "refseq": "refseq"
            }, {
                "variant": "variant"
            }, {
                "locus": "gene"
            }]
        }
    }]
}