# Configuración de Email para DobleVia

## Configuración de Resend.com

Para que el formulario de contacto funcione correctamente, necesitas configurar Resend.com (servicio gratuito y confiable).

### Pasos para configurar Resend:

1. **Crear cuenta en Resend**
   - Ve a https://resend.com
   - Crea una cuenta gratuita
   - Verifica tu email

2. **Obtener API Key**
   - Ve a "API Keys" en el dashboard
   - Crea una nueva API key
   - Copia la API key (empieza con `re_`)

3. **Configurar variables de entorno**
   - Actualiza el archivo `.env.local`:
     ```
     RESEND_API_KEY=tu-api-key-aqui
     ```

### Ventajas de Resend:

✅ **100 emails gratuitos por mes**  
✅ **Configuración simple** - solo necesitas una API key  
✅ **Entrega confiable** - 99.9% de entregabilidad  
✅ **Sin problemas de SMTP** - API REST moderna  
✅ **Dashboard para monitorear emails**

### Funcionalidad implementada:

✅ **Email al owner del negocio** con los datos del formulario  
✅ **Email de confirmación al cliente** con logo y mensaje personalizado  
✅ **Pantalla de loading** mientras se envían los emails  
✅ **Manejo de errores** con mensajes informativos  
✅ **Limpieza del formulario** después del envío exitoso

### Estructura de emails:

**Email al owner:**

- De: {fullName + email}
- Celular: {phone}
- Tipo de servicio: {serviceType}
- Preferencia de contacto: {contactPreference}

**Email al cliente:**

- Header con logo placeholder
- "Transportamos vidas" en negrilla
- Mensaje personalizado con el nombre del cliente
- Información de contacto de emergencia

### Notas importantes:

- **Resend es completamente gratuito** para hasta 100 emails/mes
- **No requiere configuración de SMTP** compleja
- **Los emails llegan directamente** a las bandejas de entrada
- **Dashboard para monitorear** el estado de los emails
