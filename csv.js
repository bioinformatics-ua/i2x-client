{
	"server": {
		"name": "i2x",
		"host": "http://localhost:3000/",
		"api_key": "e87578770fd6f2d8bef37f5d8515bd30"
	},
	"agents": [
		{
			"identifier": "agents_csv",
			"publisher": "csv",
			"payload": {
				"uri": "http://pedrolopes.net/i2x/log.csv",
				"headers": true,
				"delimiter": ",",
				"cache": "0",
				"selectors": [{
					"link": 0
				}, {
					"description": 1
				}, {
					"title": 2
				}]
			}
		}
	]
}