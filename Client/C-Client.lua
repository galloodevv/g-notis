function gShowNotification(mensaje, tipo)
    local tituloAutomatico
    if tipo == 'success' then
        tituloAutomatico = 'Success'
    elseif tipo == 'warning' then
        tituloAutomatico = 'Warning'
    elseif tipo == 'error' then
        tituloAutomatico = 'Error'
    else
        tituloAutomatico = 'Information'
        tipo = 'info'
    end

    SendNUIMessage({
        type = 'notification',
        title = tituloAutomatico,
        message = mensaje,
        notificationType = tipo
    })
end


RegisterCommand('noti_info', function()
    gShowNotification('Esta es una notificación informativa', 'info')
end)

RegisterCommand('noti_exito', function()
    gShowNotification('¡Operación completada con éxito!', 'success')
end)

RegisterCommand('noti_advertencia', function()
    gShowNotification('Precaución, algo requiere tu atención', 'warning')
end)

RegisterCommand('noti_error', function()
    gShowNotification('Ha ocurrido un error en la operación', 'error')
end)

RegisterCommand('noti_todas', function()
    gShowNotification('Esta es una notificación informativa', 'info')
    Wait(1000)
    gShowNotification('¡Operación completada con éxito!', 'success')
    Wait(1000)
    gShowNotification('Precaución, algo requiere tu atención', 'warning')
    Wait(1000)
    gShowNotification('Ha ocurrido un error en la operación', 'error')
end)

-- EXPORT
exports('gShowNotification', gShowNotification)

-- Para usar en otro script:
-- exports['g-notis']:gShowNotification(message, type)
-- Ejemplo: exports['g-notis']:gShowNotification('¡Operación completada con éxito!', 'success')
