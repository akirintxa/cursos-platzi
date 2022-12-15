### Curso de Git y Github
Git es un Sistema de Control de Versiones Distribuido.

#### Fundamentos de Git
Git almacena una referencia a todos los archivos que no se han cambiado.

Casi cualquier operación en Git es local. Se puede trabajar offline.

Git tiene integridad. No puedes perder información durante su transmisión o sufrir corrupción de archivos sin que Git lo detecte.

#### Los 3 estados de Git
* Working Directory: Es donde trabajamos de manera local, pero para guardarlo hay que pasarlo al Staging Area
* Staging: Es el área de preparación, se almacenan justo antes de hacer commit
* Git repository: El repositorio donde almacenaremos los cambios del proyecto

#### Github
GitHub es una plataforma en la que se almacenan los cambios de un proyecto. Además es una plataforma que funciona como una red social. Aquí, las personas que visiten tu sitio puedan darle estrellitas a los proyectos que hayas desarrollado.
Git es el software que ayuda con el versionado y Github es la red social que nos va a ayudar a distribuir el software.

#### Comandos Git de Configuración
* `git config --list` ver la lista de configuraciones
* `git config --global user.email user@example.com` configuración del email
* `git config --global user.name "Akirintxa DelCarmen"` configuración del nombre de usuario
* `git config --global color.ui true`colorear el output del terminal de Git.
* `git config --global core.editor ["editor --wait"]` configurar el editor de texto de git

#### Comandos Git para Flujos de Trabajo
* `git init [nombre]` inicia un repositorio y crea la carpeta [nombre].

* `git status` muestra el estado de los archivos en el repositorio.
  * `untracked` files son archivos que están en nuestro Working Directory, lo que aparezca en rojo es lo que se ha modificado y hay que pasarlo al Staging.
  * `changes` to be comitted son los archivos que se encuentran en el staging area. Aparecen en verde.
* `git add [archivo]` agrega un archivo al staging
* `git add -A` agrega todos los archivos del working directory al staging area. git add . hace lo mismo.
* `git add -n [archivo]` simula el agregado de un [archivo].
* `git rm --cached [archivo]` quita un [archivo] del staging al working area.
* `git rm -f` quita el archivo del staging y del working directory. La diferencia entre esto y simplemente borrar el archivo directamente es que se guarda en git un registro de eliminación.
* `git commit -m ["mensaje"]` agrega los archivos del staging al repositorio.
* `git commit --amend` anexa el nuevo cambio al anterior commit. Si se escribe un mensaje este sobreescribe el anterior.
* `git tag -a [tag] -m ["comentario"]` agrega el tag con un comentario al ultimo commit.
* `git tag -l` lista los tags.
* `git tag [tag] [sha1 del commit]` agrega un tag a un commit en partcular.
* `git tag -d [tag]` elimina el tag.
* `git tag -f -a [nuevo tag] [sha1 del commit]` renombra el tag del commit pero deja el anterior tag.
* `git log` ver la lista de commits.
* `git log --stat` explica el número de líneas que se cambiaron brevemente.
* `git log --stat` explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
* `git log --oneline` resumido.
* `git log --graph` ver las ramificaciones.
* `git log -[numero]` ver los ultimos [numero] commits.
* `git log --author="Name Author"` nuestra los los logs de un autor
* `git relog` muestra el log completo de git, incluido branches eliminados.
* `git show` muestra los últimos cambios que se han hecho.
* `git diff [sha1 del commit]` muestra la diferencias del commit [sha1].
* `git diff [sha1-1] [sha1-2]` diferencia entre la version 1 vs la version 2.
* `git reset`
  * `--soft [sha1]` borrar todos los commits posteriores a [sha1]. Los archivos que salen del repositorio son pasados al staging area. Este comando resetea el HEAD al [sha1] mas no modifica ningún archivo.
  * `--mixed [sha1]` borrar todos los commits posteriores a [sha1]. Los archivos que salen del repositorio son pasados al working directory
  * `--hard [sha1]` elimina todos los cambios incluso del working directory.

* `HEAD` saca los archivos del staging area. Este comando no elimina ningún archivo ni borra commits del git.
* `gitk` te muestra una ventana con toda la historia del repositorio.
* Si se desea eliminar el repositorio, solo hay que eliminar la carpeta oculta .git

#### Múltiples entornos de trabajo
* `git branch [nombre]` crear la rama [nombre]
* `git branch -l` lista las ramas
* `git branch -r` muestra todas las ramas remotas
* `git branch -a` muestra todas las ramas tanto locales como remotas
* `git branch -d` [nombre] elimina el branch [nombre]. Esto solo funciona si el branch no tiene ningún commit.
* `git branch -D` [nombre] fuerza la eliminación de un branch sin importar si tiene commits
* `git branch -m` [nombre inicial] [nuevo nombre] renombra el branch [nombre inicial] por [nuevo nombre]
* `git checkout [branch]` moverse al branch [branch]
* `git chechout [sha1]` ir al momento del tiempo de ese commit
* `git chechout [sha1] [archivo]` ir al momento del tiempo de ese commit de un archivo específico.
* `git checkout -b [nombre]` crea un branch y se mueva al mismo
* `git checkout -- [archivo]` descarta todos los cambios del archivo
* `git merge [branch]` mezcla el branch [branch] con el branch actual
* `git rebase [branch]` mezcla el [branch] con el branch actual. Es como el merge pero sin crear bifurcaciones. Para que funcione bien, primero se hace rebase a la rama con los cambios que queremos modificar y luego rebase a la rama final.
* `git stash` es un limbo como el staging area. Te permite cambiar de branch sin hacer commit.
* `git stash list` ver la lista de los stash.
* `git stash pop` aplica el ultimo stash a la rama actual.
* `git stash branch [brach]` mueve el stash al [branch]
* `git stash drop stash@{numero}` elimina el stash.
* `git stash apply stash@{numero}` aplica el stash.
* `git clean` elimina los archivos que no están bajo el control de versión. Para que funcione es necesario usar alguno de los flags:
  * `-n` no remueve nada, solo te muestra los archivos que va a eliminar.
  * `-f` elimina los archivos que no se encuentran versionados.
* `git cherry pick [sha1]` mover el commit [sha1] de otro branch al branch actual.

#### Repositorios Remotos (Github)
* `git clone [ruta]` trae el repositorio a la computadora
* `fork` hace una copia de un repositorio externo a nuestra cuenta
* `ssh-keygen -t rsa -b 4096 -C "correo@ejemploc.com"` crea una llave ssh. El correo debe de ser el mismo que se encuentra en Github
* `git remote add [nombre] [ruta]` conecta un repositorio remoto con uno local. Por defecto el nombre es origin
* `git remote -v` lista las conexiones remota
* `git remote remove [nombre]` remueve una conexión remota
* `git fetch [nombre] [branch]` traer . Solo los trae pero no lo mezcla
* `git merge [origin/master] --allow-unrelated-histories` hace un merge del fetch con el repositorio local
* `git pull [origin] [branch]` hace un fetch mas merge
* `git push [origin] [master]` envia al repositorio local al remoto
  * `--tags` enviar los tags
* `git push --all origin push` a todos los branch y tags

#### Ignorar archivos
Para ignorar archivos o carpetas de los commits se crea un archivo que se llame .gitignore.

#### Enlaces
* [Curso Platzi](https://platzi.com/cursos/git-github/)
* [Git Book](https://git-scm.com/book/es/v2)
* [Generador de GitIgnore](https://www.gitignore.io/)
