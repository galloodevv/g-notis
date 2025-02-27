fx_version 'cerulean'
games { 'gta5' }
author 'gallo.scripts'

description '.gg/mrxstudio'
repo 'https://github.com/mrxstudio/gNotify'

lua54 'yes'

client_scripts {
    'Client/*.lua'
}

server_scripts {
    '@mysql-async/lib/MySQL.lua',
    'Server/*.lua'
}


ui_page 'UI/index.html'

files {
    'UI/*.*',
    'UI/Assets/*.*',
}  