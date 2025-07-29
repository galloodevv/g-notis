fx_version 'cerulean'
games { 'gta5' }
author 'GallooDevv'

description 'gallo.scripts'
repo 'https://github.com/galloodevv/g-notis/'
discord 'https://discord.com/channels/@me/1340469382148522016'
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
