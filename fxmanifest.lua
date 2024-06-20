fx_version 'cerulean'
games { 'rdr3', 'gta5' }

author 'Devesh Bhondwe'
description 'Subscribe My Youtube Channel & Follow me on Instagram'
version '1.0.0'

files {
    'html/*.html',
    'html/*.css',
    'html/js/*.js',

}



client_scripts {
    'config.lua',
    'functions/functions_client.lua',
    'source/fuel_client.lua'
}

server_scripts {
    'config.lua',
    'source/fuel_server.lua'
}

exports {
    'GetFuel',
    'SetFuel'
}

ui_page "html/ui.html"