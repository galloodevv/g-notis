# 🔔 g-notis - Sistema de Notificaciones para FiveM

![g-notis Preview](https://imgur.com/a/ru730kl)

## 📌 Descripción
**g-notis** es un sistema de notificaciones elegante y moderno para FiveM. Diseñado para mejorar la experiencia del usuario con alertas visualmente atractivas, animaciones suaves y efectos de sonido únicos.

## ✨ Características
✅ **Diseño moderno y minimalista**
🎨 **Personalizable** (colores, tamaño, animaciones, fuentes, etc.)
🔊 **Efectos de sonido únicos por tipo de alerta**
📱 **Diseño responsive**
💡 **Fácil integración y uso**

### 📢 Tipos de Notificaciones
| Tipo      | Descripción                 | Color   |
|-----------|-----------------------------|---------|
| ℹ️ `info`    | Información general         | 🔵 Azul  |
| ✅ `success` | Operación exitosa           | 🟢 Verde |
| ⚠️ `warning` | Advertencia o precaución    | 🟡 Amarillo |
| ❌ `error`   | Error o problema            | 🔴 Rojo  |

---

## 📥 Instalación
1. **Descarga** el recurso y extráelo en tu carpeta de recursos.
2. Agrega `ensure g-notis` en tu `server.cfg`.

---

## 🚀 Uso

### 📌 Comando de Prueba
```lua
RegisterCommand('noti_info', function()
    gShowNotification('Esta es una notificación informativa', 'info')
end)
```

---

## 🎨 Personalización
Puedes modificar el archivo `UI/style.css` para adaptar el estilo de las notificaciones a tu gusto:
- 🎨 **Colores**
- 🔠 **Fuentes**
- 📏 **Tamaño**
- 🎭 **Animaciones**
- 📍 **Posición en pantalla**

---

## 📋 Requisitos
- FiveM
- ESX/QB (opcional)

---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes mejoras o sugerencias, abre un **Pull Request** o crea un **Issue** en el repositorio.

---

## 📜 Licencia
Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 💌 Contacto
📌 **Discord:** [gallooo_06]  
📌 **GitHub:** [https://github.com/galloodevv]  

⭐ **Si te gusta este recurso, no olvides dejar una estrella en el repositorio.** 🚀

