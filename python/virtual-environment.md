### Ambientes Virtuales en Python

1. Verificar donde esta python y pip
   `which python3`
   `which pip3`

2. Si estas en linux o wsl debes instalar
   `sudo apt install -y python3-venv`

3. Crear el ambiente en cada proyecto. Entrar en la carpeta del proyecto.
   `env` es el nombre que le quieres dar a ese ambiente
   `py -m venv env`

   Esto crea una nueva carpeta con el nombre del ambiente

4. Activar el ambiente
   `source env/bin/activate`
   `.\env\Scripts\activate.bat` en Windows

   Esto crea una nueva etiqueta en la terminal con el nombre del ambiente.
   alias aenv=.\env\Scripts\activate.bat - crear atajo para activar env.

5. Salir del ambiente virtual
   `deactivate`
   `.\env\Scripts\deactivate.bat` en Windows

6. Podemos instalar las librerias necesarias en el ambiente virtual como por ejemplo
   `pip3 install matplotlib==3.5.0`

7. Verificar las instalaciones
   `pip3 freeze`
