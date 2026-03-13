# 🖼️ Imágenes para Open Graph

Esta carpeta contiene las imágenes que se muestran al compartir el sitio en redes sociales.

## 📋 Especificaciones técnicas:

### Para Instagram/Facebook:
- **Formato**: JPG o PNG
- **Tamaño recomendado**: 1200 x 630 píxeles (relación 1.91:1)
- **Peso máximo**: 8MB
- **Nombre del archivo**: `og-image.jpg` o `og-image.png`

### Para Twitter:
- **Formato**: JPG o PNG
- **Tamaño recomendado**: 1200 x 675 píxeles (relación 16:9)
- **Peso máximo**: 5MB

## 🚀 Cómo subir tu imagen:

1. **Crea tu imagen** con herramientas como:
   - Canva (gratuito)
   - Photoshop
   - Figma
   - Photopea (online gratuito)

2. **Diseña con estos elementos**:
   - Fondo púrpura oscuro (#1a0a2e)
   - Logo "BYFFOREVER💗" centrado
   - Texto descriptivo (opcional)
   - Elementos visuales atractivos

3. **Sube la imagen** a GitHub:
   - Ve a: `https://github.com/BrayanGt17/contarvacas/tree/main/images`
   - Sube el archivo como `og-image.jpg`

4. **Actualiza el enlace** en `index.html` si usas otro nombre:
   ```html
   <meta property="og:image" content="https://byfforever.online/images/TU_IMAGEN.jpg">
   ```

## 📝 Ejemplo de estructura de archivos:

```
contarvacas/
├── index.html          (con meta tags Open Graph)
├── images/
│   ├── og-image.jpg    (imagen para redes sociales)
│   └── README.md       (este archivo)
└── ...
```

## ✅ Verificación:

Para verificar que tus meta tags funcionan:
1. Ve a: https://developers.facebook.com/tools/debug/
2. Ingresa tu URL: `https://byfforever.online`
3. Haz clic en "Scrape Again" para actualizar la caché

## 💡 Tips para la imagen:

- Usa colores consistentes con tu marca (púrpura y rosa)
- Incluye un mensaje claro sobre el sitio
- Mantén el diseño limpio y legible
- Prueba cómo se ve en móviles
