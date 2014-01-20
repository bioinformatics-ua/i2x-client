require 'i2x'
require 'JSON'

if ARGV[0].nil? then
	p "[i2x] Please provide a configuration file."
else
	c = I2X::Client.new JSON.parse(IO.read(ARGV[0]), {:symbolize_names => true})
	c.ping
end

