# Proyecto Nest js con CodeIgniter


## Requisitos previos
- **Docker** instalado y en ejecución.
- **PHP** 8.1 o superior.
- Acceso a la terminal.

## Instrucciones de instalación y ejecución

1. **Configurar el Backend:**
   - Navega a la carpeta `Backend`:
     ```bash
     cd Backend
     ```
   - Crea un archivo `.env` con el siguiente contenido:
     ```plaintext
     DB_USERNAME=test
     DB_PASSWORD=test
     DB_ROOT_PASSWORD=test
     DB_NAME=empanadas-db
     DB_HOST=db
     ```
     **Nota:** El valor de `DB_HOST` debe ser `db` (nombre del servicio en Docker Compose).
   - Asegúrate de que Docker esté corriendo 
   - Levanta los contenedores:
     ```bash
     docker compose up
     ```
     Espera a que la base de datos esté lista (revisa los logs en la terminal).

2. **Configurar el Frontend:**
   - Navega a la carpeta `Frontend`:
     ```bash
     cd ../Frontend
     ```
   - Verifica que tienes PHP 8.1 o superior:
     ```bash
     php --version
     ```
     
   - Inicia el servidor de CodeIgniter:
     ```bash
     php spark serve
     ```
     Accede a `http://localhost:8080` en tu navegador.

## Notas
- Si `php spark serve` falla, verifica que CodeIgniter esté instalado o  (`composer install` si es necesario).

