{
	"server": {
		"name": "i2x",
		"host": "http://localhost:3000/",
		"api_key": "611a390a93d91c4296a339742dfe63c7"
	},
	"agents": [{
		"identifier": "csv",
		"publisher": "csv",
		"payload": {
			"uri": "http://bioinformatics.ua.pt/diseasecard/hgnc.csv",
			"headers": false,
			"delimiter": ",",
			"cache": "0",
			"selectors": [{
				"id": 0
			}, {
				"gene": 1
			}, {
				"name": 2
			}]
		}
	}]
}