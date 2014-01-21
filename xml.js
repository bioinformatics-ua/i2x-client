{
	"server": {
		"name": "i2x",
		"host": "http://localhost:3000/",
		"api_key": "611a390a93d91c4296a339742dfe63c7"
	},
	"agents": [{
		"identifier": "agents_xml",
		"publisher": "xml",
		"schedule": "2h",
		"payload": {
			"uri": "https://eds.gene.le.ac.uk/api/rest.php/variants/COL3A1",
			"cache": "//title"
		}
	}]
}