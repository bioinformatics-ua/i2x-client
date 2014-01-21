#!/usr/bin/env ruby

require 'i2x'
require 'JSON'
require 'logger'

if ARGV[0].nil? then
	p "[i2x] Please provide a configuration file."
else
	begin
		# create local log
		#logger = Logger.new File.new("#{Dir.pwd}/#{ARGV[0]}.log", "w+")	# log to file
		logger = Logger.new $stdout											# log to STDOUT
		# create new I2X client
		c = I2X::Client.new JSON.parse(IO.read(ARGV[0]), {:symbolize_names => true}), logger

		# start processing
		c.process
	rescue Exception => e
		p "[i2x] unable to process i2x: #{e}"
	end
end

